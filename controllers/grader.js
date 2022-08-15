const config = require('../config.json')
const exec = require('child_process').exec
const Submissions = require("../db/models/Submissions")

const gradeAllSubmissions = (examId, { gradeSubmittedOnly = false }, callback) => {
  let match = { exam: examId }
  if (gradeSubmittedOnly)
    match.status = 'finished-submitted'

  Submissions.find(match)
  .populate('exam')
  .populate('answers_data.group_answers.question_data')
  .then(async (submission) => {
    submission.final_score = 0
    submission.answers_data.forEach((group, index) => {
      if (gradeSubmittedOnly && group.group_status === 'finished-unsubmitted')
        return
      group.group_answers.forEach(((answer, index2) => {
        let grade_points = 0
        let grade_message
        let grade_logs

        if (answers.question_data.question_type === 'short answer') {
          grade_points = gradeShortAnswer(answer.short_answer, answer.question_data.short_answer_key, answer.question_data.short_answer_points)
        } else if (answers.question_data.question_type === 'programming') {
          const result = await gradeProgrammingAnswer(examId, answer.code_submission_filename, answer.question_data.code_subquestion, answer.question_data.question_constraints)
          grade_points = result.grade_points
          grade_message = result.grade_message
          grade_logs = result.grade_logs
        }
        submission.answers_data[index].group_answers[index2].grade_points = grade_points
        submission.final_score += grade_points
        if (grade_message)
          submission.answers_data[index].group_answers[index2].grade_message = grade_message
        if (grade_logs)
          submission.answers_data[index].group_answers[index2].grade_logs = grade_logs
        submission.answers_data[index].group_status = 'graded'
      }))
    })
    submission.status = 'graded'
    await submission.save()
    if (callback)
      callback()
  }).catch(err => {
    console.log(err)
    if (callback)
      callback(err)
  })
}

const gradeShortAnswer = (short_answer, short_answer_key, short_answer_points) => {
  return (short_answer === short_answer_key ? short_answer_points : 0)
}

const gradeProgrammingAnswer = async (examId, code_submission_filename, code_subquestion, question_constraints) => {
  let grade_points = 0
  let grade_message = ''
  let grade_logs = ''
  if (!code_submission_filename) {
    grade_message = 'Unanswered'
    return { grade_points, grade_message, grade_logs }
  }
  const splitIndex = code_submission_filename.lastIndexOf('.')
  const fname = code_submission.code_submission_filename.slice(0, splitIndex)
  const ext = code_submission.code_submission_filename.slice(splitIndex)

  const cmd1 =  `isolate --cleanup && ` +
                `isolate --init && ` +
                `cd /var/local/lib/isolate/0/box && ` +
                `cp ${config.PROJECT_ROOT}/code_submission/${examId}/${code_submission_filename} /var/local/lib/isolate/0/box/ && ` +
                (ext === '.c' ? `gcc ${code_submission_filename} -o main`: `g++ ${code_submission_filename} -o main`)
  
  try {
    const { stdout, stderr } = await execWrap(cmd1)
    if (stderr) {
      grade_logs += `stderr: ${stderr}\n`
      grade_message = 'RTE'
      console.log(`stderr: ${stderr}\n`)
      return { grade_points, grade_message, grade_logs }
    }
    let isAC = true
    code_subquestion.forEach((subquestion, index1) => {
      let subquestion_score = 0
      grade_logs += `grader: Grading sub-question #${index1}...\n`
      for (let index2 = 0; index2 < subquestion.code_test_case.length; i++) {
        let test_case = subquestion.code_test_case[i]
        grade_logs += `grader: Running test case #${index2}...\n`
        const cmd2 =  `echo -e "${test_case.input}" > input.in && ` +
                      `isolate -t ${question_constraints.time_limit/1000.0} -i input.in -o output.out --run -- main`
        
        const { stdout2, stderr2 } = await execWrap(cmd2)
        if (stderr2) {
          grade_logs += `stderr: ${stderr2}\n`
          grade_message = 'RTE'
          console.log(`stderr: ${stderr2}\n`)
          isAC = false
          break
        }
        const { stdout3, stderr3 } = await execWrap(`cat output.out`)
        if (stderr3) {
          grade_logs += `stderr: ${stderr3}\n`
          grade_message = 'RTE'
          console.log(`stderr: ${stderr3}\n`)
          isAC = false
          break
        }
        if (stdout3 === test_case.output) {
          grade_logs += `grader: Passed test case #${index2} (point : ${subquestion.code_subquestion_points})\n`
          subquestion_score += subquestion.code_subquestion_points
        } else {
          grade_logs += `grader: Failed test case #${index2}\n`
          grade_message = 'WA'
          subquestion_score = 0
          isAC = false
          break
        }
      }
      if (isAC)
        grade_message = 'AC'
      grade_logs += `grader: Grading finished for sub-question #${index1} (Acc. points : ${subquestion_score})\n`
      grade_points += subquestion_score
    })
    grade_logs += `grader: Grading finished for question #${index1} (Total points : ${grade_points})\n`
    return { grade_points, grade_message, grade_logs }
  } catch(error) {
    grade_logs += `error: ${error.message}\n`
    console.log(`error: ${error.message}\n`)
  }
}

const execWrap = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error)
        return reject(error)
      return resolve({ stdout, stderr })
    })
  })
}

module.exports = { gradeAllSubmissions }