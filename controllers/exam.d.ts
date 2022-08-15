export function examAccessCheck({ isUserEnrolled, isOpenRegistration, isExamStarted, isUserNotStarted, isUserStarted, isUserSubmitted, isExamFinished, isUserSubmissionGraded, isExamResultAnnounced }: {
    isUserEnrolled?: boolean;
    isOpenRegistration?: boolean;
    isExamStarted?: boolean;
    isUserNotStarted?: boolean;
    isUserStarted?: boolean;
    isUserSubmitted?: boolean;
    isExamFinished?: boolean;
    isUserSubmissionGraded?: boolean;
    isExamResultAnnounced?: boolean;
}): (req: any, res: any, next: any) => void;
export function getExamList(mode: any): (req: any, res: any, next: any) => void;
export function getExamDetails(req: any, res: any, next: any): any;
export function enrollExam(req: any, res: any, next: any): any;
export function startExam(req: any, res: any, next: any): void;
export function getExamQuestionGroups(req: any, res: any, next: any): any;
export function getExamQuestions(req: any, res: any, next: any): void;
export function getCurrentAnswers(req: any, res: any, next: any): void;
export function updateCurrentAnswersS(req: any, res: any, next: any): void;
export function updateCurrentAnswersP(req: any, res: any, next: any): void;
export function submitGroupAnswer(req: any, res: any, next: any): void;
export function forceSubmitGroupAnswers(examId: any, groupNo: any, callback: any): void;
export function getGradeResults(req: any, res: any, next: any): void;
//# sourceMappingURL=exam.d.ts.map