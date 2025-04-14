import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BioCard() {
  return (
    <>
      <Card className="bg-[#1f1b2e] border border-purple-700 text-purple-100 rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-purple-300 font-serif tracking-wide">
            Personal Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-md leading-relaxed">
          <p>
            <strong className="text-purple-400">DOB:</strong> 15th December 1999
          </p>
          <p>
            <strong className="text-purple-400">Height:</strong> 5'6"
          </p>
          <p>
            <strong className="text-purple-400">Education:</strong> B.E in
            Electronics & Communications
          </p>
          <p>
            <strong className="text-purple-400">Profession:</strong> Automation
            Architecture at Tax Tech India (Gandhinagar)
          </p>
          <p>
            <strong className="text-purple-400">Hobbies:</strong> Travelling,
            Watching Movies, Adventure, Reading
          </p>
          <p>
            <strong className="text-purple-400">Religion:</strong> Hindu
          </p>
          <p>
            <strong className="text-purple-400">Language:</strong> Gujarati,
            Hindi, English
          </p>
          <p>
            <strong className="text-purple-400">Address:</strong> Mahadevpara,
            Chalala, Amreli, Gujarat. (365630)
          </p>
        </CardContent>
      </Card>

      <Card className="bg-[#1f1b2e] border border-purple-700 text-purple-100 rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-purple-300 font-serif tracking-wide">
            Family Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-md leading-relaxed">
          <p>
            <strong className="text-purple-400">Father's Name:</strong> Chunilal
            Lakhabhai Vandara
          </p>
          <p>
            <strong className="text-purple-400">Father's Occupation:</strong>{" "}
            Travel Office at Chalala
          </p>
          <p>
            <strong className="text-purple-400">Mother's Name:</strong> Rekhaben
            Chunilal Vandara
          </p>
          <p>
            <strong className="text-purple-400">Mother's Occupation:</strong>{" "}
            House-maker
          </p>
          <p>
            <strong className="text-purple-400">Elder Brother:</strong> Prashant
            Chunilal Vandara
          </p>
          <p>
            <strong className="text-purple-400">Sister-in-Law:</strong> Twinkle
            Prashant Vandara
          </p>
          <div className="border-t border-purple-700 pt-3">
            <p>
              <strong className="text-purple-400">Maternal Surname:</strong>{" "}
              Gohel
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
