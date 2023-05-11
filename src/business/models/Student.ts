export default interface Student {
  name: string;
  email: string;
  password: string;
  role: string;
  quizzes: { subject: string; marks: number }[];
}
