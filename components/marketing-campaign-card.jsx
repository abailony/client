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
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { BarChart, Users, MessageSquare, Share2, DollarSign, Calendar, Target, TrendingUp } from 'lucide-react'

const MarketingCampaignCard = ({ campaign = {} }) => {
  const {
    name = 'Untitled Campaign',
    objective = 'No objective set',
    targetAudience = 'No target audience specified',
    keyMessaging = 'No key messaging defined',
    channels = [],
    additionalDetails = 'No additional details available',
    budget = 'Not specified',
    duration = 'Not specified',
    kpis = [],
    strategy = 'No strategy defined',
    creatives = [],
  } = campaign

  return (
    <Card className="w-full max-w-4xl bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-lg">
      <CardHeader className="flex flex-row justify-between items-start p-6">
        <CardTitle className="text-4xl font-bold text-[#007ce3]">{name}</CardTitle>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="bg-transparent text-[#007ce3] border-[#007ce3] hover:bg-[#007ce3] hover:text-white transition-colors">
              Details
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-gray-900 text-white max-w-3xl">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-3xl text-[#007ce3] mb-4">{name} - Detailed View</AlertDialogTitle>
              <AlertDialogDescription className="text-gray-300 text-lg space-y-4">
                <p>{additionalDetails}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <strong className="text-[#007ce3]">Budget:</strong>
                    <p>{budget}</p>
                  </div>
                  <div>
                    <strong className="text-[#007ce3]">Duration:</strong>
                    <p>{duration}</p>
                  </div>
                </div>
                <div>
                  <strong className="text-[#007ce3]">Key Performance Indicators:</strong>
                  <ul className="list-disc list-inside mt-2">
                    {kpis.map((kpi, index) => (
                      <li key={index}>{kpi}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong className="text-[#007ce3]">Creative Assets:</strong>
                  <ul className="list-disc list-inside mt-2">
                    {creatives.map((creative, index) => (
                      <li key={index}>{creative}</li>
                    ))}
                  </ul>
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="bg-gray-700 text-white hover:bg-gray-600">Close</AlertDialogCancel>
              <AlertDialogAction className="bg-[#007ce3] text-white hover:bg-blue-700">Download Report</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardHeader>
      <CardContent className="grid gap-8 p-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <BarChart className="h-6 w-6 text-[#007ce3]" />
              <h3 className="font-semibold text-xl text-[#007ce3]">Campaign Objective</h3>
            </div>
            <p className="text-gray-300 text-lg">{objective}</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-[#007ce3]" />
              <h3 className="font-semibold text-xl text-[#007ce3]">Target Audience</h3>
            </div>
            <p className="text-gray-300 text-lg">{targetAudience}</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-6 w-6 text-[#007ce3]" />
            <h3 className="font-semibold text-xl text-[#007ce3]">Key Messaging</h3>
          </div>
          <p className="text-gray-300 text-lg">{keyMessaging}</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Target className="h-6 w-6 text-[#007ce3]" />
            <h3 className="font-semibold text-xl text-[#007ce3]">Strategy</h3>
          </div>
          <p className="text-gray-300 text-lg">{strategy}</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Share2 className="h-6 w-6 text-[#007ce3]" />
            <h3 className="font-semibold text-xl text-[#007ce3]">Channels and Platforms</h3>
          </div>
          <ul className="text-gray-300 text-lg grid grid-cols-3 gap-2">
            {channels.map((channel, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#007ce3] rounded-full"></span>
                <span>{channel}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-6 w-6 text-[#007ce3]" />
              <h3 className="font-semibold text-xl text-[#007ce3]">Budget</h3>
            </div>
            <p className="text-gray-300 text-lg">{budget}</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Calendar className="h-6 w-6 text-[#007ce3]" />
              <h3 className="font-semibold text-xl text-[#007ce3]">Duration</h3>
            </div>
            <p className="text-gray-300 text-lg">{duration}</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-6 w-6 text-[#007ce3]" />
            <h3 className="font-semibold text-xl text-[#007ce3]">Key Performance Indicators</h3>
          </div>
          <ul className="text-gray-300 text-lg list-disc list-inside">
            {kpis.map((kpi, index) => (
              <li key={index}>{kpi}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

// Example usage with dummy data
const ExampleUsage = () => {
  const exampleCampaign = {
    name: "Summer Splash Extravaganza 2024",
    objective: "Boost Q3 sales by 30% and increase brand awareness among young adults, while positioning our brand as the go-to choice for summer tech essentials.",
    targetAudience: "Tech-savvy millennials and Gen Z, age 18-35, with disposable income and a passion for the latest gadgets and outdoor activities.",
    keyMessaging: "Experience the ultimate summer with cutting-edge gadgets and unbeatable deals. Our waterproof, durable, and innovative tech is designed to make your summer adventures unforgettable. Don't miss out on the coolest tech of the season!",
    strategy: "Leverage a multi-channel approach combining digital marketing, influencer partnerships, and experiential marketing to create a buzz around our summer product line and drive both online and in-store sales.",
    channels: [
      "Instagram",
      "TikTok",
      "YouTube",
      "Spotify Ads",
      "Influencer Partnerships",
      "Email Marketing",
      "Pop-up Beach Events",
      "Mobile App Push Notifications",
      "Outdoor Billboards"
    ],
    additionalDetails: "This campaign leverages the summer season to create a sense of FOMO (Fear of Missing Out) among our target audience. We're partnering with top tech influencers and organizing pop-up events at popular beaches to create buzz and drive engagement. The campaign will feature a series of limited-time flash sales and exclusive bundle deals to encourage immediate action.",
    budget: "$750,000",
    duration: "10 weeks (June 1 - August 15, 2024)",
    kpis: [
      "30% increase in Q3 sales compared to last year",
      "50% increase in social media engagement across all platforms",
      "100,000 new email subscribers",
      "1 million views on campaign hashtag content",
      "25% increase in mobile app downloads",
      "10,000 attendees at pop-up beach events"
    ],
    creatives: [
      "Summer Adventure Video Series",
      "Waterproof Tech Showcase Reels",
      "Influencer Unboxing Stories",
      "Interactive Beach-themed AR Filters",
      "Limited Edition Product Packaging",
      "Daily Deals Countdown Graphics"
    ]
  }

  return <MarketingCampaignCard campaign={exampleCampaign} />
}

export default MarketingCampaignCard