import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    const hashedPassword = await bcrypt.hash('admin123', 10)

    // Create Admin User
    const admin = await prisma.user.upsert({
        where: { email: 'admin@swamihealing.com' },
        update: {},
        create: {
            email: 'admin@swamihealing.com',
            name: 'Admin User',
            password: hashedPassword,
            role: 'ADMIN',
        },
    })

    console.log('Admin user created:', admin.email)

    // Clear existing properties to avoid duplicates
    await prisma.property.deleteMany({})
    console.log('Existing properties cleared')

    // Create Sample Properties
    const properties = [
        {
            title: 'Luxury Villa in South Delhi',
            description: 'A magnificent 5-bedroom villa with private pool and garden in the heart of South Delhi. Features premium finishes, home automation, and 24/7 security.',
            price: '₹25 Cr',
            location: 'Greater Kailash',
            city: 'Delhi',
            type: 'Villa',
            bhk: '5 BHK',
            area: '8,500 SqFt',
            bedrooms: '5',
            bathrooms: '6',
            images: '/images/properties/luxury-villa-1.jpg,/images/properties/interior-1.jpg',
            features: 'Private Pool, Home Gym, Smart Security, Servant Quarters, Landscape Garden',
            isFeatured: true,
            status: 'AVAILABLE',
        },
        {
            title: 'Modern Apartment in Gurugram',
            description: 'Spacious 3 BHK apartment with a panoramic view of the skyline. Located in a premium gated community with world-class amenities.',
            price: '₹4.5 Cr',
            location: 'Sector 54, Golf Course Road',
            city: 'Gurugram',
            type: 'Apartment',
            bhk: '3 BHK',
            area: '2,800 SqFt',
            bedrooms: '3',
            bathrooms: '3',
            images: '/images/properties/modern-apt-1.jpg,/images/properties/prop-1.jpg',
            features: 'Clubhouse, Swimming Pool, Gated Community, Power Backup, 2 Car Parking',
            isFeatured: true,
            status: 'AVAILABLE',
        },
        {
            title: 'Premium Penthouse in Mumbai',
            description: 'Exclusive sea-facing penthouse with a private terrace. Offers breathtaking views of the Arabian Sea and the Bandra-Worli Sea Link.',
            price: '₹12 Cr',
            location: 'Worli',
            city: 'Mumbai',
            type: 'Apartment',
            bhk: '4 BHK',
            area: '4,200 SqFt',
            bedrooms: '4',
            bathrooms: '5',
            images: '/images/properties/penthouse-1.jpg,/images/properties/prop-3.jpg',
            features: 'Sea Facing, Private Terrace, Jacuzzi, Automation, 4 Car Parking',
            isFeatured: true,
            status: 'AVAILABLE',
        },
        {
            title: 'Contemporary Estate in Bangalore',
            description: 'A masterpiece of modern architecture with open floor plans and integrated smart home technology.',
            price: '₹18 Cr',
            location: 'Indiranagar',
            city: 'Bangalore',
            type: 'Villa',
            bhk: '6 BHK',
            area: '6,500 SqFt',
            bedrooms: '6',
            bathrooms: '7',
            images: '/images/properties/modern-house-1.jpg,/images/properties/interior-1.jpg',
            features: 'Smart Home, Solar Power, Home Cinema, Wine Cellar',
            isFeatured: true,
            status: 'AVAILABLE',
        },
        {
            title: 'Skyline View Condominium',
            description: 'High-rise living at its best with floor-to-ceiling windows and world-class concierge services.',
            price: '₹5.2 Cr',
            location: 'Upper Worli',
            city: 'Mumbai',
            type: 'Apartment',
            bhk: '3 BHK',
            area: '3,100 SqFt',
            bedrooms: '3',
            bathrooms: '4',
            images: '/images/properties/modern-house-2.jpg,/images/properties/prop-2.jpg',
            features: 'Concierge, Infinity Pool, Sky Lounge, Private Elevator',
            isFeatured: false,
            status: 'AVAILABLE',
        },
        {
            title: 'Seaside Retreat in Goa',
            description: 'A charming villa just steps away from the beach, perfect for a vacation home or permanent residence.',
            price: '₹8.5 Cr',
            location: 'Anjuna',
            city: 'Goa',
            type: 'Villa',
            bhk: '4 BHK',
            area: '4,800 SqFt',
            bedrooms: '4',
            bathrooms: '4',
            images: '/images/properties/luxury-villa-2.jpg,/images/properties/house-1.jpg',
            features: 'Beach Access, Tropical Garden, Alfresco Dining, Guest House',
            isFeatured: true,
            status: 'AVAILABLE',
        },
        {
            title: 'Heritage Row House',
            description: 'Beautifully restored heritage home featuring traditional architecture with modern interior upgrades.',
            price: '₹6.7 Cr',
            location: 'Fort',
            city: 'Mumbai',
            type: 'Villa',
            bhk: '3 BHK',
            area: '3,500 SqFt',
            bedrooms: '3',
            bathrooms: '3',
            images: '/images/properties/house-1.jpg,/images/properties/interior-1.jpg',
            features: 'High Ceilings, Teak Woodwork, Private Courtyard, Modern Kitchen',
            isFeatured: false,
            status: 'AVAILABLE',
        },
        {
            title: 'Minimalist Studio with View',
            description: 'Perfect urban living space for professionals, featuring minimalist design and maximum efficiency.',
            price: '₹1.8 Cr',
            location: 'Andheri West',
            city: 'Mumbai',
            type: 'Apartment',
            bhk: '1 BHK',
            area: '850 SqFt',
            bedrooms: '1',
            bathrooms: '1',
            images: '/images/properties/prop-3.jpg,/images/properties/modern-apt-1.jpg',
            features: 'Fully Furnished, Smart Lighting, Gym Access, Central Location',
            isFeatured: false,
            status: 'AVAILABLE',
        },
        {
            title: 'Modern Workspace Office',
            description: 'Prime commercial office space in a Grade A building, ideal for growing businesses.',
            price: '₹4.2 Cr',
            location: 'Cyber City',
            city: 'Gurugram',
            type: 'Office',
            bhk: 'Office',
            area: '5,000 SqFt',
            bedrooms: '0',
            bathrooms: '2',
            images: '/images/properties/prop-4.jpg,/images/properties/interior-1.jpg',
            features: 'High Speed Internet, 24/7 Access, Ample Parking, Conference Rooms',
            isFeatured: false,
            status: 'AVAILABLE',
        }
    ]

    for (const property of properties) {
        await prisma.property.create({
            data: property,
        })
    }

    console.log('Sample properties created')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
