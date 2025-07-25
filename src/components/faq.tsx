"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, AlertCircle, DollarSign, Users, Shield } from "lucide-react"

export default function DashboardPreview() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Live <span className="gradient-text">Dashboard Preview</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get real-time insights into your fraud detection performance with our comprehensive analytics dashboard
            designed for claims managers and executives.
          </p>
        </motion.div>

        {/* Browser Frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-t-xl shadow-2xl border border-gray-200 overflow-hidden"
        >
          {/* Browser Header */}
          <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2 border-b">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="flex-1 bg-white rounded-md px-3 py-1 text-sm text-gray-600 ml-4">
              https://dashboard.frauddetection.ai
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 bg-gray-50">
            {/* Header Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Claims Processed</p>
                      <p className="text-2xl font-bold text-gray-900">2,847</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600">+12% from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Fraud Detected</p>
                      <p className="text-2xl font-bold text-gray-900">127</p>
                    </div>
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <TrendingDown className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600">-8% from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Money Saved</p>
                      <p className="text-2xl font-bold text-gray-900">$1.2M</p>
                    </div>
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600">+23% from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Accuracy Rate</p>
                      <p className="text-2xl font-bold text-gray-900">94.8%</p>
                    </div>
                    <div className="w-12 h-12 bg-violet-50 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-violet-600" />
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600">+2.1% from last month</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Claims Table */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Recent High-Risk Claims</span>
                  <Badge variant="secondary">Live Updates</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: "CLM-2024-001", risk: "High", score: 8.7, status: "Under Review", amount: "$15,400" },
                    { id: "CLM-2024-002", risk: "Medium", score: 6.2, status: "Approved", amount: "$8,900" },
                    { id: "CLM-2024-003", risk: "High", score: 9.1, status: "Flagged", amount: "$22,100" },
                    { id: "CLM-2024-004", risk: "Low", score: 2.8, status: "Approved", amount: "$4,200" },
                  ].map((claim, index) => (
                    <motion.div
                      key={claim.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-4 bg-white rounded-lg border"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            claim.risk === "High"
                              ? "bg-red-400"
                              : claim.risk === "Medium"
                                ? "bg-yellow-400"
                                : "bg-green-400"
                          }`}
                        ></div>
                        <div>
                          <p className="font-medium text-gray-900">{claim.id}</p>
                          <p className="text-sm text-gray-600">Risk Score: {claim.score}/10</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium text-gray-900">{claim.amount}</span>
                        <Badge
                          variant={
                            claim.status === "Approved"
                              ? "default"
                              : claim.status === "Flagged"
                                ? "destructive"
                                : "secondary"
                          }
                        >
                          {claim.status}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}