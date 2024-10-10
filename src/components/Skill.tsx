import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { skills } from '@/lib/constants'

export default function Skill() {
  return (
    <div className="space-y-8 mb-20">
      <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {skill.title}
              </CardTitle>
              {skill.icon}
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm">{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}