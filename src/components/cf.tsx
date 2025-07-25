"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Target, BarChart3, Clock, Shield, Users, Database, AlertTriangle, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Real-Time Risk Scoring",
    description:
      "Instant fraud probability assessment with dynamic risk scores updated in real-time as new data becomes available.",
    badge: "Core Feature",
    color: "text-yellow-600",
  },
  {
    icon: Target,
    title: "Claim Anomaly Detection",
    description:
      "Advanced pattern recognition identifies unusual claim characteristics and suspicious behavior patterns.",
    badge: "AI-Powered",
    color: "text-red-600",
  },
  {
    icon: BarChart3,
    title: "Deep Model Insights",
    description: "Explainable AI provides detailed reasoning behind fraud predictions with confidence intervals.",
    badge: "Analytics",
    color: "text-blue-600",
  },
  {
    icon: Clock,
    title: "Automated Processing",
    description: "Streamline claims workflow with automated fraud checks, reducing manual review time by 60%.",
    badge: "Efficiency",
    color: "text-green-600",
  },
  {
    icon: Shield,
    title: "Multi-Layer Security",
    description: "Enterprise-grade security with encrypted data processing and compliance with insurance regulations.",
    badge: "Security",
    color: "text-purple-600",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Collaborative workspace for claims teams with shared insights, notes, and decision tracking.",
    badge: "Workflow",
    color: "text-indigo-600",
  },
  {
    icon: Database,
    title: "Historical Analysis",
    description: "Leverage years of claims data to identify emerging fraud patterns and improve model accuracy.",
    badge: "Intelligence",
    color: "text-cyan-600",
  },
  {
    icon: AlertTriangle,
    title: "Smart Alerts",
    description: "Configurable alert system notifies teams of high-risk claims requiring immediate attention.",
    badge: "Monitoring",
    color: "text-orange-600",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Comprehensive dashboards track fraud detection performance, savings, and operational metrics.",
    badge: "Reporting",
    color: "text-emerald-600",
  },
]

export default function CoreFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Powerful <span className="gradient-text">Core Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive fraud detection capabilities designed to protect your business while improving operational
            efficiency and customer satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-violet-50 transition-colors ${feature.color}`}
                    >
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-violet-50 rounded-2xl p-8 border border-violet-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Claims Process?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join leading insurance companies who have reduced fraud losses by up to 40% while improving customer
              satisfaction and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Schedule Demo
              </button>
              <button className="border border-violet-200 text-violet-700 hover:bg-violet-50 px-8 py-3 rounded-lg font-medium transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
