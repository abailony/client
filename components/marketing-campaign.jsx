'use client'

import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/first-alert-dialog"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { BarChart, Users, MessageSquare, Share2, Target, DollarSign, Calendar, TrendingUp } from 'lucide-react'

const InfoCard = ({ title, content, icon: Icon }) => (
  <div className="bg-[#1a1a2e] p-4 rounded-lg shadow-md mb-4 w-full transition-all duration-300 hover:bg-[#151525] group">
    <div className="flex items-center space-x-2 mb-2">
      <Icon className="h-5 w-5 text-[#007CE3]" />
      <h3 className="font-semibold text-lg text-[#007CE3] group-hover:text-[#00a0ff]">{title}</h3>
    </div>
    <p className="text-gray-300 text-sm">{content}</p>
  </div>
)

const MarketingCampaignCard = ({ campaign = {} }) => {
  const {
    name = 'Untitled Campaign',
    objective = 'No objective set',
    targetAudience = 'No target audience specified',
    keyMessaging = 'No key messaging defined',
    channels = [],
    additionalDetails = 'No additional details available',
    strategy = 'No strategy defined',
    budget = 'Not specified',
    duration = 'Not specified',
    kpis = [],
    conversionRate = 'Not specified',
    ctr = 'Not specified',
    engagementRate = 'Not specified',
    impressionsReach = 'Not specified',
    audienceDemographics = 'Not specified',
  } = campaign

  return (
    <Card className="w-full max-w-3xl bg-[#0f0f1a] text-white shadow-lg rounded-2xl overflow-hidden">
      <CardHeader className="flex flex-row justify-between items-center p-6 bg-[#0a0a14]">
        <CardTitle className="text-3xl font-bold text-[#007CE3]">{name}</CardTitle>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="px-4 py-2 text-sm bg-transparent text-[#007CE3] border border-[#007CE3] rounded-md hover:bg-[#007CE3] hover:text-white transition-colors duration-300">
              Details
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-[#0f0f1a] text-white max-w-3xl">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-3xl text-[#007CE3] mb-4">{name} - Detailed View</AlertDialogTitle>
              <AlertDialogDescription className="text-gray-300 text-lg space-y-4">
                <p>{additionalDetails}</p>
                <div className="grid grid-cols-2 gap-4">
                  <InfoCard title="Strategy" content={strategy} icon={Target} />
                  <InfoCard title="Budget" content={budget} icon={DollarSign} />
                  <InfoCard title="Duration" content={duration} icon={Calendar} />
                  <InfoCard title="Conversion Rate" content={conversionRate} icon={TrendingUp} />
                  <InfoCard title="Click-Through Rate (CTR)" content={ctr} icon={TrendingUp} />
                  <InfoCard title="Engagement Rate" content={engagementRate} icon={TrendingUp} />
                  <InfoCard title="Impressions and Reach" content={impressionsReach} icon={Users} />
                  <InfoCard title="Audience Demographics" content={audienceDemographics} icon={Users} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-[#007CE3] mb-2">Key Performance Indicators</h3>
                  <ul className="list-disc list-inside">
                    {kpis.map((kpi, index) => (
                      <li key={index}>{kpi}</li>
                    ))}
                  </ul>
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="bg-[#1a1a2e] text-white hover:bg-[#151525]">Close</AlertDialogCancel>
              <AlertDialogAction className="bg-[#007CE3] text-white hover:bg-[#0056b3]">Download Report</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-2 gap-4">
          <InfoCard title="Campaign Objective" content={objective} icon={BarChart} />
          <InfoCard title="Target Audience" content={targetAudience} icon={Users} />
          <InfoCard title="Key Messaging" content={keyMessaging} icon={MessageSquare} />
          <div className="bg-[#1a1a2e] p-4 rounded-lg shadow-md mb-4 w-full transition-all duration-300 hover:bg-[#151525] group">
            <div className="flex items-center space-x-2 mb-2">
              <Share2 className="h-5 w-5 text-[#007CE3]" />
              <h3 className="font-semibold text-lg text-[#007CE3] group-hover:text-[#00a0ff]">Channels and Platforms</h3>
            </div>
            <ul className="text-gray-300 text-sm grid grid-cols-1 gap-1">
              {channels.map((channel, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#007CE3] rounded-full"></span>
                  <span>{channel}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Example usage with dummy data
const ExampleUsage = () => {
  const exampleCampaign = {
    name: "Summer Splash Extravaganza 2024",
    objective: "Boost Q3 sales by 30% and increase brand awareness among young adults.",
    targetAudience: "Tech-savvy millennials and Gen Z, age 18-35, with disposable income.",
    keyMessaging: "Experience the ultimate summer with cutting-edge gadgets and unbeatable deals.",
    channels: [
      "Instagram",
      "TikTok",
      "YouTube",
      "Spotify Ads",
      "Influencer Partnerships"
    ],
    additionalDetails: "This campaign leverages the summer season to create a sense of FOMO (Fear of Missing Out) among our target audience.",
    strategy: "Multi-channel approach combining digital marketing, influencer partnerships, and experiential marketing.",
    budget: "$750,000",
    duration: "10 weeks (June 1 - August 15, 2024)",
    kpis: [
      "30% increase in Q3 sales compared to last year",
      "50% increase in social media engagement across all platforms",
      "100,000 new email subscribers",
      "1 million views on campaign hashtag content"
    ],
    conversionRate: "3.5% (up from 2.8% last year)",
    ctr: "4.2% across all digital channels",
    engagementRate: "8.7% on social media platforms",
    impressionsReach: "10 million impressions, 3 million unique reach",
    audienceDemographics: "65% female, 35% male, 70% aged 18-28, 30% aged 29-35"
  }

  return <MarketingCampaignCard campaign={exampleCampaign} />
}

export default MarketingCampaignCard