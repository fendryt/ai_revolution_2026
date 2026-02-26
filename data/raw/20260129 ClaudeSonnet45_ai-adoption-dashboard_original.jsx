import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { TrendingUp, Users, Zap, DollarSign, AlertCircle, CheckCircle } from 'lucide-react';

const AIDashboard = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedMetric, setSelectedMetric] = useState('adoption');

  // AI Adoption by Industry Over Time
  const adoptionData = [
    { year: '2020', tech: 45, finance: 38, healthcare: 28, retail: 25, manufacturing: 22, education: 18 },
    { year: '2021', tech: 58, finance: 52, healthcare: 38, retail: 35, manufacturing: 30, education: 25 },
    { year: '2022', tech: 72, finance: 65, healthcare: 51, retail: 48, manufacturing: 42, education: 35 },
    { year: '2023', tech: 84, finance: 76, healthcare: 64, retail: 60, manufacturing: 55, education: 48 },
    { year: '2024', tech: 91, finance: 85, healthcare: 75, retail: 71, manufacturing: 68, education: 62 },
    { year: '2025', tech: 95, finance: 90, healthcare: 82, retail: 79, manufacturing: 76, education: 72 }
  ];

  // Current adoption rates by industry
  const currentAdoption = [
    { industry: 'Technology', rate: 95, color: '#3b82f6' },
    { industry: 'Finance', rate: 90, color: '#10b981' },
    { industry: 'Healthcare', rate: 82, color: '#8b5cf6' },
    { industry: 'Retail', rate: 79, color: '#f59e0b' },
    { industry: 'Manufacturing', rate: 76, color: '#ef4444' },
    { industry: 'Education', rate: 72, color: '#06b6d4' }
  ];

  // AI Use Cases Distribution
  const useCases = [
    { name: 'Automation', value: 28, color: '#3b82f6' },
    { name: 'Customer Service', value: 22, color: '#10b981' },
    { name: 'Data Analysis', value: 18, color: '#8b5cf6' },
    { name: 'Content Creation', value: 15, color: '#f59e0b' },
    { name: 'Predictive Analytics', value: 10, color: '#ef4444' },
    { name: 'Other', value: 7, color: '#6b7280' }
  ];

  // Impact metrics
  const impactData = [
    { metric: 'Productivity', value: 85 },
    { metric: 'Cost Savings', value: 72 },
    { metric: 'Innovation', value: 88 },
    { metric: 'Customer Satisfaction', value: 78 },
    { metric: 'Revenue Growth', value: 65 },
    { metric: 'Employee Efficiency', value: 81 }
  ];

  // ROI over time
  const roiData = [
    { quarter: 'Q1 2023', roi: 15, investments: 45 },
    { quarter: 'Q2 2023', roi: 22, investments: 52 },
    { quarter: 'Q3 2023', roi: 31, investments: 58 },
    { quarter: 'Q4 2023', roi: 42, investments: 65 },
    { quarter: 'Q1 2024', roi: 55, investments: 71 },
    { quarter: 'Q2 2024', roi: 68, investments: 78 },
    { quarter: 'Q3 2024', roi: 79, investments: 84 },
    { quarter: 'Q4 2024', roi: 89, investments: 88 }
  ];

  // Challenges faced
  const challenges = [
    { challenge: 'Data Quality', severity: 75 },
    { challenge: 'Skills Gap', severity: 68 },
    { challenge: 'Integration', severity: 62 },
    { challenge: 'Cost', severity: 58 },
    { challenge: 'Security Concerns', severity: 71 },
    { challenge: 'Change Management', severity: 55 }
  ];

  const stats = [
    { icon: TrendingUp, label: 'Avg Adoption Rate', value: '82%', change: '+15%', color: 'text-blue-600' },
    { icon: Users, label: 'Companies Using AI', value: '4.2M', change: '+32%', color: 'text-green-600' },
    { icon: DollarSign, label: 'Market Value', value: '$196B', change: '+41%', color: 'text-purple-600' },
    { icon: Zap, label: 'Productivity Gain', value: '40%', change: '+8%', color: 'text-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">
            The AI Revolution
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A data-driven journey through enterprise AI adoption, from early experimentation to mainstream integration
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <p className="text-sm text-slate-600 mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-slate-800">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* The Story Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">📖 The Story</h2>
          <div className="space-y-4 text-slate-700">
            <p className="leading-relaxed">
              <span className="font-semibold text-blue-600">2020-2021:</span> The pandemic accelerated digital transformation, pushing early adopters in tech and finance to experiment with AI for automation and remote work solutions. Adoption was cautious but purposeful.
            </p>
            <p className="leading-relaxed">
              <span className="font-semibold text-green-600">2022-2023:</span> The breakthrough moment. ChatGPT and generative AI captured public imagination, triggering explosive growth across all sectors. Healthcare and retail began catching up rapidly.
            </p>
            <p className="leading-relaxed">
              <span className="font-semibold text-purple-600">2024-2025:</span> Maturity phase. Companies moved from experimentation to strategic integration. ROI became measurable, and AI transformed from competitive advantage to business necessity.
            </p>
          </div>
        </div>

        {/* Adoption Timeline */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">📈 Adoption Timeline by Industry</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={adoptionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="year" stroke="#64748b" />
              <YAxis stroke="#64748b" label={{ value: 'Adoption Rate (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                formatter={(value) => [`${value}%`, '']}
              />
              <Legend />
              <Line type="monotone" dataKey="tech" stroke="#3b82f6" strokeWidth={3} name="Technology" />
              <Line type="monotone" dataKey="finance" stroke="#10b981" strokeWidth={3} name="Finance" />
              <Line type="monotone" dataKey="healthcare" stroke="#8b5cf6" strokeWidth={3} name="Healthcare" />
              <Line type="monotone" dataKey="retail" stroke="#f59e0b" strokeWidth={3} name="Retail" />
              <Line type="monotone" dataKey="manufacturing" stroke="#ef4444" strokeWidth={3} name="Manufacturing" />
              <Line type="monotone" dataKey="education" stroke="#06b6d4" strokeWidth={3} name="Education" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Current State & Use Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Current Adoption */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">🎯 Current Adoption (2025)</h2>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={currentAdoption} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" stroke="#64748b" />
                <YAxis dataKey="industry" type="category" stroke="#64748b" width={100} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                  formatter={(value) => [`${value}%`, 'Adoption']}
                />
                <Bar dataKey="rate" radius={[0, 8, 8, 0]}>
                  {currentAdoption.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Use Cases */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">💡 Primary Use Cases</h2>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={useCases}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {useCases.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Impact & ROI */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Business Impact */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">⚡ Business Impact</h2>
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart data={impactData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="metric" stroke="#64748b" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#64748b" />
                <Radar name="Impact Score" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* ROI Evolution */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">💰 ROI Evolution</h2>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={roiData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="quarter" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                  formatter={(value) => [`${value}%`, '']}
                />
                <Legend />
                <Line type="monotone" dataKey="roi" stroke="#10b981" strokeWidth={3} name="ROI %" />
                <Line type="monotone" dataKey="investments" stroke="#8b5cf6" strokeWidth={3} name="Investment Level" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Challenges */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">⚠️ Key Challenges</h2>
          <div className="space-y-4">
            {challenges.map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-700 font-medium">{item.challenge}</span>
                  <span className="text-slate-600 font-semibold">{item.severity}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${item.severity}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white mb-8">
          <h2 className="text-2xl font-bold mb-6">🔑 Key Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Widespread Adoption</p>
                <p className="text-blue-100">Over 80% of major enterprises now use AI in some capacity, with tech leading at 95%</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">ROI Acceleration</p>
                <p className="text-blue-100">ROI has nearly sextupled from 15% to 89% over 8 quarters as implementations mature</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Automation Dominates</p>
                <p className="text-blue-100">28% of AI use cases focus on automation, driving immediate productivity gains</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Persistent Challenges</p>
                <p className="text-blue-100">Data quality and skills gaps remain the top barriers to successful implementation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-slate-600 text-sm">
          <p>Data represents aggregated trends from industry reports and surveys (2020-2025)</p>
          <p className="mt-2">Dashboard created with React and Recharts</p>
        </div>
      </div>
    </div>
  );
};

export default AIDashboard;