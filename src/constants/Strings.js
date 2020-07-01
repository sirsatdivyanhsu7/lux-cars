const Texts = {
  //common text
  ok: 'ok',
  cancel: 'cancel',
  //onboarding screen
  goLearn: 'GoLearn',
  toprightText: 'Welcome to GoLearn.Guru',
  bottomRightContent: 'If you already have an account, you can login here.',

  //Login Screen
  loginTitle: 'Login',
  email: 'Email',
  password: 'password',
  loginContent:
    'If you do not have your login credentials, you can ask your teacher or admin.',
  loginBottomRight: 'First time user? Please verify your access code here.',
  rememberMe: 'Remember me',

  //Forgot Password
  forgotPassword: 'Forgot Password',
  forgotContent: "Don't worry, happens to the best of us!",
  submit: 'Submit',
  forgotSuccess:
    'A email has been sent. Please click the link when you get it.',

  //Reset Password
  ResetTitle: 'Reset Password',
  ResetButton: 'save',
  ResetSuccess: 'Password created successfully.',
  ResetChangeSuccess: 'Password changed successfully.',

  //access code
  firstTimer: 'Enter your access code.',
  accessCode: 'Access code',
  accessCodeTitle: 'Enter access code',
  accessCodeContain:
    'If you do not have an access code, you can ask your teacher or admin',
  validate: 'Validate',

  //sign up
  signupTitle: 'Sign up',
  signupContent:
    'If you do not have your login credentials, you can create an account.',

  //nav bar
  logout: 'Logout',
  logoutMessage: 'Are you sure you want to logout?',
  cancel_caps: 'Cancel',
  okey_caps: 'OK',

  //Dashboard
  dashBoard: 'DashBoard',
  lessons: 'Lessons',
  dash: '-',
  toDo: 'To-Do',
  corrected: 'Corrected',
  seeAll: 'See All',
  performance: 'Performance',
  task: 'Task',
  tasks: 'Tasks',
  noToDoText:
    'You don’t have any lesson yet. Once you start a lesson, youwill be able to do and review your tasks.',
  achievement: 'Achievement',
  noLessonText:
    'You have no lessons to do yet. Once the teacher creates a lesson, you will see the tasks to do here.',
  noLessonReview:
    "You don't have any lessons for Peer review yet, once your teacher has assigned you a lesson it will appear here.",
  noLessonCorrected:
    "You don't have any corrected lessons yet, once your teacher corrects a lesson it will appear here",
  noLessonHisory:
    "You don't have any lessons in history yet, once your lessons are completed and reviewed they will show here",
  noTaskText:
    'You have no tasks to do yet, We are working on this and you will see the tasks to do here soon.',
  attendance: 'Attendance',
  engagement: 'Engagement',
  your: 'Your',
  performFooter1: 'You have achieved ',
  performFooter2: ' % of your CLP this term.',
  assessments: 'Assessments',
  lastResults: 'Last Results',
  confirmPassword: 'Confirm Password',

  // my work
  my_work: 'My Work',
  history: 'History',
  peer_review: 'Peer Review',
  all_curriculum: 'All curriculum',
  all_actions: 'All actions',
  all_units: 'All units',
  review_arrow: 'Review',
  start_arrow: 'Start',
  back_arrow: 'Back',
  details_arrow: 'Details',
  no: 'No',
  timeline: 'Timeline',
  customised_learning_plan: 'Customised Learning Plan',
  you_have_no_lessons_yet: 'You have no lessons yet',

  // custom learning plan (clp)
  clp: 'Custom Learning Plan',
  units: 'Units',
  totalTaskText: 'Total Tasks completed',
  percent_sign: '%',
  reading: 'Reading',
  writing: 'Writing',
  listening: 'Listening',
  speaking: 'Speaking',
  myResults: 'My Results',
  classAvg: 'Class avg.',
  learningStatistics: 'Learning Statistics',
  lessonDetails: 'Lesson Details',
  unitsDetails: 'Units Details',
  addedTeacher: 'Added by the teacher',

  //Profile
  profile: 'Profile',
  picture: 'Picture',
  myDetails: 'My Details',
  changeProfilePicture: 'Change',
  memberShipHeader: 'Member Since',
  membershipData: '07/09/2000',
  addressHeader: 'School Address',
  addressData: '',
  settings: 'Settings',
  emailHeader: 'Email',
  passwordHeader: 'Password',
  profileChangePassword: 'Change Password',
  somethingWrong: 'Something wrong?',
  notifyUs: 'If some of your details are incorrect, please notify us.',
  wrongInputHeader: 'Wrong Input',
  replaceWithHeader: 'Replace With...',
  sendCorrection: 'Send Correction',
  oldPassword: 'Old Password',
  newPassword: 'New Password',
  profileConfirmPassword: 'Confirm New Password',
  schoolChange: 'School Change',
  schoolChangeRequest:
    'Click below to request to change school but to keep the existing information.',
  select: 'Select',
  name: 'Name',
  schoolAddress: 'School Address',
  addReplaceInformation: 'Add Replace Information',
  selectOneWrongInput: 'Select one wrong input',
  pickerValueForSelect: '',
  pickerValueForName: 'name',
  pickerValueForSchoolAddress: 'school-address',
  sendCorrectionTitle: 'Send Correction',
  sencCorrectionSuccessMessage: 'Email has been sent successfully',

  //Achievement
  attendText: 'You have attended',
  thisTerm: 'this term',
  attendlesson: 'lessons',
  classAttended: 'Class attended',
  classUnattended: 'Class unattended',
  hours: 'hours',
  myHour: 'My hours',
  avgHour: 'Class avg. hours',
  noDataGraphText: 'No data found',

  //LessonDetails
  noTaskFound: "You don't have any task available in this lesson",
  taskCompleted: 'Tasks completed',
  silash: ' / ',
  space: ' ',
  nextTesk: 'Next Task',
  finishLesson: 'Finish Lesson',
  lessonFinished: 'Lesson completed',
  lessonFinishMessage:
    'Lesson has been completed successfully. Press Okey to go back to lesson list',
  showCorrectAnswers: 'Show correct answers >',
  showSubmittedAnswers: 'Show submitted answers >',
};

const Errors = {
  error: 'Error',
  timeOut: 'Timeout',
  alert: 'Alert',
  noInternet: 'No Connection',
  decimalNotAllowed: 'Decimal values not allowed',
  oops: 'GoLearn Custom Message',
  //Login
  blankPassword: 'Please enter your password.',
  invalidPassword: "The password can't contain spaces.",
  invalidPasswordToShort: 'Password should be at least 6 characters.',
  invalidPasswordNotTheSame:
    'The password and the confirm password should be same.',
  invalidPhoneNumber: 'The mobile number should not contain spaces.',
  invalidPhoneNumberToShort: 'Mobile number is too short.',
  invalidPhoneNumberToLong: 'Mobile number is too long.',
  blankEmail: 'Please enter your email',
  emailFormatInvalid: 'Please enter valid email.',
  validPhoneNo: 'Please enter a valid phone number.',
  commonError: 'Something went wrong, Please try after some time.',
};

const TABS = {
  TO_DO: 1,
  CORRECTED: 2,
  PEER_REVIEW: 3,
  HISTORY: 4,
};

module.exports = {
  Texts,
  Errors,
  TABS,
};
