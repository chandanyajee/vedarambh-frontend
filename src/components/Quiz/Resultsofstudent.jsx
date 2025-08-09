import PDFDocument from 'pdfkit';
import StudentQuizResult from '../models/StudentQuizResult.js';
import Student from '../models/Student.js';

router.get('/export-pdf/:studentId', async (req, res) => {
  const student = await Student.findById(req.params.studentId);
  const results = await StudentQuizResult.find({ studentId: req.params.studentId }).populate('quizId');

  const doc = new PDFDocument();
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename=${student.name}_results.pdf`);
  doc.pipe(res);

  doc.fontSize(20).text(`Student Result Report: ${student.name}`, { align: 'center' }).moveDown();

  results.forEach((r, i) => {
    doc.fontSize(14).text(`${i + 1}. Quiz: ${r.quizId.courseId}`);
    doc.text(`   Score: ${r.score}/${r.total}`);
    doc.text(`   Date: ${new Date(r.submittedAt).toLocaleString()}`).moveDown();
  });

  doc.end();
});


export default function Footer() {
  return (
    <>
        <a
  href={`http://localhost:5000/api/quiz/export-pdf/${studentId}`}
  target="_blank"
  className="bg-green-600 px-4 py-2 text-white rounded"
>
  Export to PDF
</a>

    </>
  );
}
