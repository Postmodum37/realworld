import { Article } from '@/types'

export const PLACEHOLDER_AVATAR =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAFXUlEQVR4nO2dW4hbVRjH/9/MSI1OW1v7YH2wPohFQRFpaS2CWkXqi1AQBa0URcSK+CCiIj4ogg/6oBREwQsFH6pWRUWkYBELPlhQWxURtIKVogW1D1KlM5lpk/l8yNmQTjsz2efsfbL3Wd8fDLQ5Z69vrf+sdbL3OWsjEAgEAoFAIBAIBAKBQI6hpgfshHs8w7L2kRl2AZ0VlRHYWPp/vqpyuGW2xPFT6J/6XZtgWLbvMNH2HlNhkrQhFBaV6URSGXYEYEa7jgNzv9AChp2iaGwpKgCQ5M+jMb5rFLDa76MZHHR5VUzRe4rxyafr+J0MJR7hNiXjIU3gIdNQXEnmpxTNlurlFxfYdSrxBX+HH2Ah6SVXQcXwMGHrUxVz73TazMGp7yUb/wVYD3BWxdLuUPpwwf7BzyQIUtRV0uzoJr97ynhZ4KsAd1YsewDgEABMtPwkiMmXCVxTHq2Fl7m/8W05hfA6gOEV6xTN56Zf7uqyaVA1PMSPYkfB3oehA0q8H4GWVT9Qn1Q2ORdxxuiLAN9dsfQUGTl35nBkwGXkNwEMr1inaPbwlvKFvDFeTpJEZJIgJccnAXwK4HAi6yE5AHAIJt6qPxKVCbXwPUnPdH04SQnHU+rkpXiGKPEZwvRXJjvNkANmQEPOJbgbwD0V698RLX1cACDuYLbw/8iNh1QNl3UpuGXyPRJbqrYDUuFcBMXQ8NeYc8yKa0qZiVGsF2C3A3oIwG0Vy2cA7K5Y+xVJ3ZDk8JDa4SmXnBgzvGqrAESH3bapYu1kSfQF20yg/+MhqeG5uyxAYEXgOcXD9wM8e/U1+m3BEekbQpL7m44hSzIXZM7uxSPAqEDEDg8ZlBTDCYOYK4ZfA7C5YvlhnGbvArIoCBmVvDaGVH4RGb8PpT0Q96XwE7TuDh6VYeodUPF8bIHXDfAx8EQhVV6KFB7iSxDXJV4H4KKKtZNmvAnA9ow6sJPk+CYNPRMkzQfUQXnXFZTDc4D22FIdoWYB5CFBMldpD4SuDyl7EeQ8JbTrGU7h20lGESSjYcZNkL73kL71kIxWWVV3WQnwVZCMl7kB34KkOuwYtK7lKEzIMuRmY50T8iGIT0+JeQ7QXA9xWfV8wLvOz0sY3SXNkCBZ9JTQ9a0YcHhIzDqXEt7rM/i0t+9bEDfCmB04N9qB6YhSE2Rs7sxGp70vSRIklUHdRRQ3QWrN/Dn1kB6xYJ1Hl0sPKVuCuIniVZBe3xPPSx/S7xA6/WU3WxLPflTlzJKHVCGYgUz0IaiHBDwRBMkxQZAcEwTJMUGQHBMEyTFBkBwTBMkxQZAcEwTJMUGQHBMEyTFJ3rHrTxP0VZCkEfpOEj3Ep4LeBfHtBfXjYtnnX8z4FsRpdvjAlyC+vQ6pIL4ESRqZb0Gy6EGSQgYESRphHOvNcyPIvM0GQTJYZeXKQxhpKZKkDh2/vudDEN/TPJUQTQ80yS7LVcRZ9JJVJKsE8Tn8Wl3Wn/D5t5LtkcG5QEFEcgtSHh6W/7m+L0GyOlFc8K2I94v4DEeRjP6WUZIgLquU2vdlCHQSPYHYQNX6H0lUvYrYQGPtZqPvPcR07EmyrDM9xvWN0r4NaLLKqt1l+SZpkPDFU/H6Nw9/AWkGUfn/LuLJJE3lNEFRyWBZPtbr4r4FcV7iZ0HrX+9HYBsI7CW4C4ReqrlcfbvNY6Vf/2yWdRoEBsL4m7/DFbxBgPzYAB4W6YMEm0pRESwM4IG/ZFFU8t1yAOAEg/+iAXHZjwGNOIYaCAQCgUAgEAgEAoFAIBAI5IL/ACYwbca2xAbNAAAAAElFTkSuQmCC'

const articles: Array<Article> = [
  {
    id: '2AE5D18E-DDED-4CF4-9E98-501685BDA915',
    slug: 'future-of-ai-development-2025',
    title: 'The Future of AI Development in 2025',
    description:
      'Exploring upcoming trends and innovations in artificial intelligence development',
    body: 'Artificial intelligence continues to evolve at an unprecedented pace. In this article, we explore the most promising developments expected in 2025, including advanced neural networks, ethical AI considerations, and practical applications in everyday life...',
    tagList: ['AI', 'Technology', 'Future', 'Development'],
    createdAt: '2025-02-15T09:30:43.379Z',
    updatedAt: '2025-02-15T09:30:43.379Z',
    favorited: false,
    favoritesCount: 12,
    author: {
      username: 'ai_expert',
      bio: 'AI researcher and tech enthusiast',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      following: false,
    },
  },
  {
    id: '332E0DA4-49DD-43F5-B53E-BB08E3C9B21A',
    slug: 'modern-web-development-practices',
    title: 'Modern Web Development Best Practices',
    description:
      'A comprehensive guide to current web development methodologies',
    body: 'The landscape of web development is constantly changing. This guide covers essential practices including performance optimization, accessibility standards, and modern frameworks...',
    tagList: ['WebDev', 'Programming', 'JavaScript', 'Best Practices'],
    createdAt: '2025-02-14T14:15:43.379Z',
    updatedAt: '2025-02-14T14:15:43.379Z',
    favorited: true,
    favoritesCount: 8,
    author: {
      username: 'webdev_guru',
      bio: 'Senior Web Developer',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      following: true,
    },
  },
  {
    id: '881786EA-56D1-4006-8DF2-50332CC59F2A',
    slug: 'sustainable-energy-solutions',
    title: 'Sustainable Energy Solutions for Tomorrow',
    description: 'Innovative approaches to renewable energy implementation',
    body: 'As we face growing environmental challenges, sustainable energy solutions become increasingly crucial. This article examines cutting-edge technologies in renewable energy...',
    tagList: ['Energy', 'Sustainability', 'Environment', 'Technology'],
    createdAt: '2025-02-13T11:20:43.379Z',
    updatedAt: '2025-02-13T11:20:43.379Z',
    favorited: false,
    favoritesCount: 15,
    author: {
      username: 'eco_innovator',
      bio: 'Environmental Scientist',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      following: false,
    },
  },
  {
    id: '267F46C1-89C1-482D-A2EC-42C5D292779E',
    slug: 'mobile-app-design-trends',
    title: 'Mobile App Design Trends 2025',
    description: 'Latest trends shaping the future of mobile app design',
    body: 'Mobile app design continues to evolve with user expectations. Discover the latest trends in UI/UX design, including augmented reality integration and adaptive interfaces...',
    tagList: ['Design', 'Mobile', 'UI/UX', 'Trends'],
    createdAt: '2025-02-12T16:45:43.379Z',
    updatedAt: '2025-02-12T16:45:43.379Z',
    favorited: false,
    favoritesCount: 6,
    author: {
      username: 'design_master',
      bio: 'UX Designer & Creative Director',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      following: false,
    },
  },
  {
    id: 'E919A8D7-7B10-43FA-BAA5-B60C833C9B8E',
    slug: 'blockchain-in-finance',
    title: 'Blockchain Revolution in Finance',
    description: 'How blockchain is transforming the financial sector',
    body: 'Blockchain technology is revolutionizing financial services. Learn about the latest applications, from decentralized finance to smart contracts...',
    tagList: ['Blockchain', 'Finance', 'Technology', 'Crypto'],
    createdAt: '2025-02-11T13:25:43.379Z',
    updatedAt: '2025-02-11T13:25:43.379Z',
    favorited: true,
    favoritesCount: 23,
    author: {
      username: 'crypto_analyst',
      bio: 'Financial Technology Expert',
      image: 'https://randomuser.me/api/portraits/women/5.jpg',
      following: true,
    },
  },
  {
    id: '76EDCFC5-B7C5-4F96-AFAF-5715E5D354DA',
    slug: 'machine-learning-applications',
    title: 'Practical Machine Learning Applications',
    description: 'Real-world applications of machine learning in industry',
    body: 'Machine learning is transforming various industries. This article explores practical applications in healthcare, manufacturing, and customer service...',
    tagList: ['Machine Learning', 'AI', 'Technology', 'Industry'],
    createdAt: '2025-02-10T10:15:43.379Z',
    updatedAt: '2025-02-10T10:15:43.379Z',
    favorited: false,
    favoritesCount: 9,
    author: {
      username: 'ml_expert',
      bio: 'Machine Learning Engineer',
      image: 'https://randomuser.me/api/portraits/men/6.jpg',
      following: false,
    },
  },
  {
    id: 'D1112842-9EC0-4678-8568-D4A1B33335BA',
    slug: 'remote-work-strategies',
    title: 'Effective Remote Work Strategies',
    description: 'Maximizing productivity in remote work environments',
    body: 'Remote work has become the new normal. Discover effective strategies for maintaining productivity, team collaboration, and work-life balance...',
    tagList: ['Remote Work', 'Productivity', 'Management', 'Workplace'],
    createdAt: '2025-02-09T15:50:43.379Z',
    updatedAt: '2025-02-09T15:50:43.379Z',
    favorited: false,
    favoritesCount: 14,
    author: {
      username: 'remote_pro',
      bio: 'Remote Work Consultant',
      image: 'https://randomuser.me/api/portraits/women/7.jpg',
      following: false,
    },
  },
  {
    id: '7D96809A-1B7F-4B20-B668-0BD6C54A8735',
    slug: 'cybersecurity-essentials',
    title: 'Essential Cybersecurity Practices',
    description: 'Fundamental cybersecurity measures for modern businesses',
    body: "Cybersecurity is crucial in today's digital landscape. Learn about essential practices to protect your business from emerging threats...",
    tagList: ['Cybersecurity', 'Security', 'Technology', 'Business'],
    createdAt: '2025-02-08T12:40:43.379Z',
    updatedAt: '2025-02-08T12:40:43.379Z',
    favorited: true,
    favoritesCount: 18,
    author: {
      username: 'security_expert',
      bio: 'Cybersecurity Specialist',
      image: 'https://randomuser.me/api/portraits/men/8.jpg',
      following: true,
    },
  },
]

export default articles
