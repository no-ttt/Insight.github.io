import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import AccountNav from '../../components/account/AccountNav';
import { FileText, ChevronDown, ChevronUp } from 'lucide-react';

interface Consultation {
  id: string;
  date: string;
  title: string;
  isNew?: boolean;
  question: string;
  answer: string;
  followUp?: string;
}

const consultations: Consultation[] = [
  {
    id: 'C202403150001',
    date: '2024/03/16',
    title: 'Cardiovascular and Degenerative Disease Genetic Testing',
    question: 'Nucleic Acid Extraction Service, Transcriptome Sequencing, Colorectal Cancer Five-Item Testing',
    answer: 'Hello, please provide pricing for the above items. Thank you.',
    followUp: 'I have some additional questions about the testing process...',
    isNew: true
  },
  {
    id: 'C202403100002',
    date: '2024/03/10',
    title: 'Comprehensive Health Screening',
    question: 'What is the testing time for the comprehensive screening?',
    answer: 'The comprehensive health screening typically takes 7-10 working days to complete. This includes sample processing, analysis, and report generation.'
  }
];

const ConsultationsPage = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState<string>('');

  const toggleConsultation = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
    setReplyText('');
  };

  const handleSubmitReply = (id: string) => {
    console.log('Submitting reply for consultation', id, replyText);
    setReplyText('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <AccountNav />
            
            <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Consultations</h2>

              <div className="space-y-4">
                {consultations.map((consultation) => (
                  <div key={consultation.id} className="border rounded-lg overflow-hidden">
                    {/* Consultation Header */}
                    <div 
                      className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                      onClick={() => toggleConsultation(consultation.id)}
                    >
                      <div className="flex items-center space-x-4">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <div>
                          <div className="flex items-center">
                            <p className="font-medium text-gray-900">{consultation.title}</p>
                            {consultation.isNew && (
                              <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-600 text-xs rounded-full">
                                NEW
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">
                            {consultation.date} • ID: {consultation.id}
                          </p>
                        </div>
                      </div>
                      {expandedId === consultation.id ? (
                        <ChevronUp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </div>

                    {/* Consultation Details */}
                    {expandedId === consultation.id && (
                      <div className="border-t p-4">
                        <div className="mb-6">
                          <h3 className="font-semibold text-gray-800 mb-2">Question</h3>
                          <p className="text-gray-600">{consultation.question}</p>
                        </div>

                        <div className="mb-6">
                          <h3 className="font-semibold text-gray-800 mb-2">Response</h3>
                          <p className="text-gray-600">{consultation.answer}</p>
                        </div>

                        {consultation.followUp && (
                          <div className="mb-6">
                            <div className="bg-gray-100 p-4 rounded">
                              <p className="text-gray-600">{consultation.followUp}</p>
                            </div>
                          </div>
                        )}

                        <div className="space-y-4">
                          <textarea
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            placeholder="Type your follow-up question here..."
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            rows={4}
                          />
                          <div className="flex justify-center">
                            <button
                              onClick={() => handleSubmitReply(consultation.id)}
                              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConsultationsPage;