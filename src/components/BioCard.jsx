import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BioCard() {
  return (
    <>
      <Card className="bg-[#1f1b2e] border border-purple-700 text-purple-100 rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl text-center font-semibold text-purple-100 font-serif tracking-wide">
            Personal Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-md leading-relaxed">
          <p>
            <span className="text-purple-400 font-medium">DOB:</span> 15th
            December 1999
          </p>
          <p>
            <span className="text-purple-400 font-medium">Height:</span> 5'6"
          </p>
          <p>
            <span className="text-purple-400 font-medium">Education:</span> B.E
            in Electronics & Communications
          </p>
          <p>
            <span className="text-purple-400 font-medium">Profession:</span>{" "}
            Automation Architecture at Tax Tech India (Gandhinagar)
          </p>
          <p>
            <span className="text-purple-400 font-medium">Hobbies:</span>{" "}
            Travelling, Watching Movies, Adventure, Reading
          </p>
          <p>
            <span className="text-purple-400 font-medium">Religion:</span> Hindu
          </p>
          <p>
            <span className="text-purple-400 font-medium">Language:</span>{" "}
            Gujarati, Hindi, English
          </p>
          <p>
            <span className="text-purple-400 font-medium">Address:</span>{" "}
            Mahadevpara, Chalala, Amreli, Gujarat. (365630)
          </p>
        </CardContent>
      </Card>

      <Card className="bg-[#1f1b2e] border border-purple-700 text-purple-100 rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl text-center font-semibold text-purple-100 font-serif tracking-wide">
            Family Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-md leading-relaxed">
          <p>
            <span className="text-purple-400 font-medium">Father's Name:</span>{" "}
            Chunilal Lakhabhai Vandara
          </p>
          <p>
            <span className="text-purple-400 font-medium">
              Father's Occupation:
            </span>{" "}
            Travel Office at Chalala
          </p>
          <p className="flex flex-wrap gap-x-1">
            <span className="text-purple-400 font-medium shrink-0">
              Father's Phone no:
            </span>{" "}
            <a
              href="tel:+919427245403"
              className="text-blue-400 font-medium hover:underline hover:text-blue-600 transition duration-200"
            >
              +91 94272 45403
            </a>
            ,{" "}
            <a
              href="tel:+919998194098"
              className="text-blue-400 font-medium hover:underline hover:text-blue-600 transition duration-200"
            >
              +91 99981 94098
            </a>
          </p>

          <p>
            <span className="text-purple-400 font-medium">Mother's Name:</span>{" "}
            Rekhaben Chunilal Vandara
          </p>
          <p>
            <span className="text-purple-400 font-medium">
              Mother's Occupation:
            </span>{" "}
            House-maker
          </p>
          <p>
            <span className="text-purple-400 font-medium">Elder Brother:</span>{" "}
            Prashant Chunilal Vandara
          </p>
          <p>
            <span className="text-purple-400 font-medium">Sister-in-Law:</span>{" "}
            Twinkle Prashant Vandara
          </p>
          <div className="border-t border-purple-700 pt-3">
            <p>
              <span className="text-purple-400 font-medium">
                Maternal Surname:
              </span>{" "}
              Gohel
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
