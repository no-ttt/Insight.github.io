import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import AccountNav from '../../components/account/AccountNav';
import { FileText } from 'lucide-react';

const reports = [
  {
    id: 'R202403150001',
    date: '2024-03-15',
    title: "Alzheimer's Disease Genetic Test",
    type: 'Self-Purchase',
    status: 'Available'
  },
  {
    id: 'R202403100002',
    date: '2024-03-10',
    title: 'Comprehensive Health Screening',
    type: 'Self-Purchase',
    status: 'Available'
  }
];

const ReportsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <AccountNav />
            
            <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Test Reports</h2>

              <div className="space-y-4">
                {reports.map((report) => (
                  <div 
                    key={report.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition"
                  >
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-gray-900">{report.title}</h3>
                        <p className="text-sm text-gray-500">
                          Report ID: {report.id} • {report.date}
                        </p>
                      </div>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                      View Report
                    </button>
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

export default ReportsPage;