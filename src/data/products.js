const imagePool = [
  'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80',
]

const categorySeed = [
  { category: 'Mobiles', title: 'Zaafree Zenith 5G Smartphone', price: 24999, badge: 'Best Seller' },
  { category: 'Laptops', title: 'NovaBook Slim Performance Laptop', price: 64999, badge: 'Top Rated' },
  { category: 'Tablets', title: 'TabFlow 11 Entertainment Tablet', price: 28999, badge: 'Popular' },
  { category: 'Audio', title: 'Orbit ANC Wireless Headphones', price: 8999, badge: 'Limited Deal' },
  { category: 'Cameras', title: 'PixelPro Mirrorless Camera Kit', price: 54999, badge: 'Creator Pick' },
  { category: 'Wearables', title: 'PulseFit Pro Smartwatch', price: 11999, badge: 'Trending' },
  { category: 'Gaming', title: 'BlazeX RGB Gaming Console Bundle', price: 42999, badge: 'Hot Pick' },
  { category: 'Smart Home', title: 'HomeSync Voice Control Hub', price: 6999, badge: 'Smart Choice' },
  { category: 'Kitchen Appliances', title: 'ChefMate Smart Air Fryer', price: 7499, badge: 'Kitchen Favorite' },
  { category: 'Home Decor', title: 'LumaNest Designer Decor Set', price: 3999, badge: 'New Arrival' },
  { category: 'Furniture', title: 'CloudRest Modern Accent Chair', price: 15999, badge: 'Living Room Pick' },
  { category: 'Lighting', title: 'AuraBeam Ambient Floor Lamp', price: 4599, badge: 'Decor Deal' },
  { category: 'Bedding', title: 'DreamSoft Premium Bedding Combo', price: 3299, badge: 'Comfort Pick' },
  { category: 'Bath', title: 'PureSpa Luxury Bath Organizer', price: 1899, badge: 'Essential' },
  { category: 'Beauty', title: 'GlowMist Beauty Styling Kit', price: 4999, badge: 'Beauty Edit' },
  { category: 'Skincare', title: 'RadiantCare Skincare Ritual Box', price: 2799, badge: 'Daily Care' },
  { category: 'Fragrances', title: 'NoirBloom Signature Perfume', price: 3499, badge: 'Gift Pick' },
  { category: "Men's Fashion", title: 'UrbanWeave Men Casual Set', price: 2299, badge: 'Fashion Deal' },
  { category: "Women's Fashion", title: 'LuxeLine Women Studio Outfit', price: 2699, badge: 'Top Style' },
  { category: 'Kids Fashion', title: 'PlayPop Kids Weekend Pack', price: 1799, badge: 'Parents Pick' },
  { category: 'Footwear', title: 'StrideRun Everyday Sneakers', price: 3199, badge: 'Walk Ready' },
  { category: 'Bags & Luggage', title: 'Voyager Cabin Travel Set', price: 5899, badge: 'Travel Pick' },
  { category: 'Watches', title: 'ChronoEdge Analog Watch', price: 4199, badge: 'Classic Pick' },
  { category: 'Jewellery', title: 'ShineCraft Premium Jewellery Box', price: 3799, badge: 'Gift Favorite' },
  { category: 'Books', title: 'ReaderHub Bestseller Collection', price: 1499, badge: 'Book Club' },
  { category: 'Office Supplies', title: 'DeskForge Productivity Kit', price: 2299, badge: 'Work Pick' },
  { category: 'School Supplies', title: 'EduStart Student Essentials Pack', price: 1599, badge: 'Campus Deal' },
  { category: 'Fitness', title: 'CoreFlex Home Fitness Kit', price: 4999, badge: 'Workout Ready' },
  { category: 'Sports', title: 'GamePoint Sports Combo Pack', price: 3699, badge: 'Active Pick' },
  { category: 'Outdoor', title: 'TrailNest Outdoor Adventure Kit', price: 7999, badge: 'Weekend Gear' },
  { category: 'Automotive', title: 'DriveCare Car Essentials Kit', price: 3499, badge: 'Road Ready' },
  { category: 'Tools', title: 'BuildPro Home Tool Set', price: 4599, badge: 'DIY Pick' },
  { category: 'Pet Supplies', title: 'HappyPaws Premium Pet Care Kit', price: 2399, badge: 'Pet Favorite' },
  { category: 'Grocery', title: 'FreshBasket Monthly Staples Box', price: 1999, badge: 'Value Pack' },
  { category: 'Health', title: 'WellTrack Health Monitor Pack', price: 5599, badge: 'Doctor Choice' },
  { category: 'Baby Care', title: 'TinyNest Baby Comfort Bundle', price: 4299, badge: 'Parent Trust' },
  { category: 'Toys', title: 'BrightMinds STEM Play Set', price: 2899, badge: 'Kids Love It' },
  { category: 'Stationery', title: 'InkNest Premium Stationery Box', price: 999, badge: 'Desk Favorite' },
  { category: 'Art Supplies', title: 'ColorVerse Artist Starter Set', price: 2599, badge: 'Creative Pick' },
  { category: 'Music Instruments', title: 'RhythmBox Music Practice Kit', price: 8999, badge: 'Music Deal' },
  { category: 'Travel', title: 'SkyRoute Smart Travel Bundle', price: 6999, badge: 'Frequent Flyer' },
  { category: 'Gardening', title: 'GreenBloom Balcony Garden Kit', price: 2199, badge: 'Home Greenery' },
  { category: 'Wellness', title: 'CalmSphere Wellness Bundle', price: 3199, badge: 'Mindful Pick' },
  { category: 'Air Care', title: 'PureAir Silent Purifier', price: 9999, badge: 'Healthy Home' },
  { category: 'Cleaning', title: 'SparkMate Home Cleaning Set', price: 1899, badge: 'Daily Utility' },
  { category: 'Storage', title: 'StackSmart Storage Organizer', price: 1499, badge: 'Space Saver' },
  { category: 'Snacks', title: 'CrunchCart Gourmet Snack Box', price: 899, badge: 'Snack Time' },
  { category: 'Coffee & Tea', title: 'BrewCraft Coffee and Tea Collection', price: 1299, badge: 'Cafe Pick' },
  { category: 'Appliances', title: 'HomeVolt Essential Appliance Combo', price: 13999, badge: 'Festive Deal' },
  { category: 'Monitors', title: 'VisionEdge 27-inch Monitor', price: 18499, badge: 'Creator Favorite' },
]

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

export const categories = categorySeed.map((item) => item.category)

export const products = categorySeed.flatMap((item, index) => {
  const variants = [
    {
      title: item.title,
      price: item.price,
      badge: item.badge,
      image: imagePool[index % imagePool.length],
      stock: 5 + (index % 16),
      tag: 'Standard',
    },
    {
      title: `${item.title} Plus`,
      price: Math.round(item.price * 1.18),
      badge: 'Premium Choice',
      image: imagePool[(index + 3) % imagePool.length],
      stock: 8 + (index % 12),
      tag: 'Plus',
    },
    {
      title: `${item.title} Max`,
      price: Math.round(item.price * 1.34),
      badge: 'Flagship Deal',
      image: imagePool[(index + 6) % imagePool.length],
      stock: 6 + (index % 10),
      tag: 'Max',
    },
    {
      title: `${item.title} Lite`,
      price: Math.max(499, Math.round(item.price * 0.82)),
      badge: 'Budget Pick',
      image: imagePool[(index + 9) % imagePool.length],
      stock: 10 + (index % 14),
      tag: 'Lite',
    },
  ]

  return variants.map((variant, variantIndex) => {
    const id = index * 2 + variantIndex + 1
    const rating = Number((4.2 + ((index + variantIndex) % 7) * 0.1).toFixed(1))
    const originalPrice = Math.round(
      variant.price * (1.12 + (((index + variantIndex) % 5) * 0.04)),
    )

    return {
      id,
      slug: slugify(variant.title),
      sku: `ZAA-${String(id).padStart(4, '0')}`,
      category: item.category,
      title: variant.title,
      price: variant.price,
      originalPrice,
      rating,
      reviews: (420 + id * 137).toLocaleString('en-IN'),
      badge: variant.badge,
      variant: variant.tag,
      delivery:
        id % 3 === 0 ? 'Free delivery by tomorrow' : 'Delivery within 2 to 4 days',
      image: variant.image,
      stock: variant.stock,
      seller: 'Zaafree Retail',
      description: `${variant.title} is a premium pick in ${item.category.toLowerCase()} built for shoppers who want reliable quality, fast delivery, and everyday value.`,
      highlights: [
        `${item.category} bestseller on Zaafree`,
        `${variant.tag} configuration with curated value`,
        '7-day replacement and easy returns',
        'Secure payments and fast dispatch',
      ],
    }
  })
})

export const featuredCategories = categories.slice(0, 12)
