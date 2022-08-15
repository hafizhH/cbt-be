const cron = require('node-cron')
const Exams = require('../db/models/Exams')
const { forceSubmitGroupAnswers } = require('./exam')

examScheduleData = {}

let dailyTask

const scheduleDailyTask = ({ executeTaskFirstTime = false }) => {
  if (!dailyTask) {
    dailyTask = cron.schedule('0 0 0 * * *', dailyTaskToDo, {
      scheduled: false,
      timezone: 'Asia/Jakarta'
    })
    dailyTask.start()
    schedulerLog('Daily task scheduled every midnight local timezone')
    if (executeTaskFirstTime)
      dailyTaskToDo()
  } else {
    schedulerLog('Daily task already scheduled')
  }
}

const dailyTaskToDo = () => {
  schedulerLog('Running task "dailyTaskToDo"')
  assignExamStartSchedule()
}

const assignExamStartSchedule = (callback) => {
  schedulerLog('Running task "assignExamStartSchedule"')
  Exams.find({}, 'start_time')
  .then(exams => {
    exams.forEach(exam => {
      if (!examScheduleData[exam._id.toString()]) {
        let task = cron.schedule(dateToCronString(exam.start_time), () => {
          assignExamRunningSchedule(exam._id.toString())
          examScheduleData[exam._id.toString()].start_task.stop()
        }, {
          scheduled: false,
          timezone: "Asia/Jakarta"
        })
        task.start()
        examScheduleData[exam._id.toString()] = {}
        examScheduleData[exam._id.toString()].start_task = task
      }
    })
    if (callback)
      callback()
  }).catch(err => {
    schedulerLog(err.message)
    schedulerLog(err.stack)
    if (callback)
      callback(err)
  })
}

const assignExamRunningSchedule = (examId, callback) => {
  schedulerLog('Running task "assignExamRunningSchedule" on exam '+examId)
  Exams.findById(examId, 'start_time duration question_groups')
  .then(exam => {
    if (!examScheduleData[examId].running_tasks) {
      let group_submit_tasks = []
      for (let i = 0; i < exam.question_groups.length; i++) {
        group = exam.question_groups[i]
        let submit_task = cron.schedule(dateToCronString(new Date(exam.start_time.getTime() + group.group_submit_max_time*60*1000)), () => {
          forceSubmitGroupAnswers(examId, i)
          examScheduleData[examId].running_tasks.group_submit_tasks[i].stop()
        }, {
          scheduled: false,
          timezone: "Asia/Jakarta"
        })
        submit_task.start()
        group_submit_tasks.push(submit_task)
      }
      
      let grade_task = cron.schedule(dateToCronString(new Date(exam.start_time.getTime() + (exam.duration+5)*60*1000)), () => {
        gradeAllSubmissions(examId)
        grade_task.stop()
      }, {
        scheduled: false,
        timezone: "Asia/Jakarta"
      })
      grade_task.start()
      examScheduleData[examId].running_tasks = {}
      examScheduleData[examId].running_tasks.group_submit_tasks = group_submit_tasks
      examScheduleData[examId].running_tasks.grade_task = grade_task
      if (callback)
        callback()
    }
  }).catch(err => {
    schedulerLog(err.message)
    schedulerLog(err.stack)
    if (callback)
      callback(err)
  })
}

const dateToCronString = (date) => {
  return `${date.getSeconds()} ${date.getMinutes()} ${date.getHours()} ${date.getDate()} ${date.getMonth() + 1} ${date.getDay()}`
}

const schedulerLog = (message) => {
  console.log(`(${new Date().toLocaleString()}) Scheduler : ${message}`)
}

module.exports = { scheduleDailyTask, dailyTaskToDo, assignExamStartSchedule, assignExamRunningSchedule }