'use client'
import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br bg-white dark:bg-[#181F2A]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-y-12"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-100/30 to-transparent transform skew-y-12"></div>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions about your event reservation? We're here to help make your special occasion unforgettable.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm animate-in fade-in slide-in-from-left-8 duration-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
              {submitStatus === 'success' && (
                <Alert className="mb-6 border-green-200 bg-green-50 text-green-800 dark:bg-green-900">
                  <AlertDescription>
                    Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                  </AlertDescription>
                </Alert>
              )}
              {submitStatus === 'error' && (
                <Alert className="mb-6 border-red-200 bg-red-50 text-red-800 dark:bg-red-900 ">
                  <AlertDescription>
                    Sorry, there was an error sending your message. Please try again later.
                  </AlertDescription>
                </Alert>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className='text-gray-900'>Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`transition-all duration-200 ${
                        errors.name ? 'border-red-500 focus:border-red-500 dark:border-red-500 dark:focus:border-red-500' : 'focus:border-blue-500 dark:focus:border-blue-500'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 animate-fade-in">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className='text-gray-900'>Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`transition-all duration-200 ${
                        errors.email ? 'border-red-500 focus:border-red-500 dark:border-red-500 dark:focus:border-red-500' : 'focus:border-blue-500 dark:focus:border-blue-500'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 animate-fade-in">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className='text-gray-900'>Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className={`transition-all duration-200 ${
                      errors.subject ? 'border-red-500 focus:border-red-500 dark:border-red-500 dark:focus:border-red-500' : 'focus:border-blue-500 dark:focus:border-blue-500'
                    }`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-500 animate-fade-in">{errors.subject}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className='text-gray-900'>Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`min-h-[120px] transition-all duration-200 resize-none ${
                      errors.message ? 'border-red-500 focus:border-red-500 dark:border-red-500 dark:focus:border-red-500' : 'focus:border-blue-500 dark:focus:border-blue-500'
                    }`}
                    placeholder="Tell us more about your event reservation needs..."
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500 animate-fade-in">{errors.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform transition-all duration-200 hover:scale-105 disabled:scale-100 dark:bg-gradient-to-r dark:from-blue-600 dark:to-indigo-600 dark:hover:from-blue-700 dark:hover:to-indigo-700 dark:text-white"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}