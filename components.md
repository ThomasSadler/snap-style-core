# Component Library Documentation

This document describes all the custom components created for the Reverb marketplace clone, built with React, TypeScript, and Tailwind CSS.

## Header

**Purpose**: Main navigation header with search functionality and user actions.

**Features**:
- Top promotional banner with close button
- Logo and main navigation links
- Search bar with icon
- User action buttons (Watching, Cart, Account)
- "Sell Your Gear" CTA button
- Mobile hamburger menu
- Sticky positioning

**Props**: None (static component)

**Usage**:
```tsx
<Header />
```

---

## HeroBanner

**Purpose**: Main promotional section matching Reverb's hero layout with split content and image grid.

**Features**:
- Split layout with content (2 columns) and images (3 columns)
- Responsive typography with line breaks
- Primary CTA button
- 3-image grid layout (1 full-width top, 2 square bottom)
- Image hover effects and captions
- Gradient background

**Props**:
- `title` (string): Main headline text
- `description` (string): Subtitle/description text
- `buttonText` (string): CTA button text
- `images` (array): Array of image objects with src, alt, and optional caption

**Usage**:
```tsx
<HeroBanner 
  title="Find Your Sound."
  description="Discover the gear that defines your music"
  buttonText="Shop Now"
  images={[
    { src: "/image1.jpg", alt: "Studio", caption: "Professional Studio" },
    { src: "/image2.jpg", alt: "Guitar" },
    { src: "/image3.jpg", alt: "Drums" }
  ]}
/>
```

---

## ProductCard

**Purpose**: Individual product display cards for marketplace items.

**Features**:
- Square aspect ratio product image
- Heart/watch button with active state
- Condition badge
- Product title with hover effects
- Price display with optional original price
- Seller information with rating
- Location display
- Hover-activated action buttons (Make Offer, Add to Cart)
- Smooth animations and transitions

**Props**:
- `image` (string): Product image URL
- `title` (string): Product name
- `price` (string): Current price
- `originalPrice?` (string): Original/crossed-out price
- `seller` (string): Seller name
- `rating?` (number): Seller rating
- `location?` (string): Seller location
- `isWatched?` (boolean): Watch status
- `condition?` (string): Item condition
- `className?` (string): Additional CSS classes

**Usage**:
```tsx
<ProductCard 
  image="/guitar.jpg"
  title="Fender Stratocaster Electric Guitar"
  price="$1,200"
  originalPrice="$1,500"
  seller="Guitar Center"
  rating={4.8}
  location="Nashville, TN"
  condition="Excellent"
  isWatched={false}
/>
```

---

## SectionHeader

**Purpose**: Section title headers with optional "See more" navigation links.

**Features**:
- Large section title
- Optional subtitle
- "See more" link with chevron icon
- Hover animations
- Flexible layout

**Props**:
- `title` (string): Main section title
- `subtitle?` (string): Optional subtitle text
- `showSeeMore?` (boolean): Show/hide the "See more" link (default: true)
- `seeMoreText?` (string): Custom text for the link (default: "See more")
- `className?` (string): Additional CSS classes

**Usage**:
```tsx
<SectionHeader 
  title="Featured Gear"
  subtitle="Handpicked instruments from top sellers"
  showSeeMore={true}
  seeMoreText="View All"
/>
```

---

## StoryCard

**Purpose**: Featured content cards for articles, videos, and editorial content.

**Features**:
- Video aspect ratio (16:9)
- Image with hover zoom effect
- Video play button overlay (for video type)
- Gradient text overlay at bottom
- Title and description text
- Author and publish date metadata
- Smooth hover animations

**Props**:
- `image` (string): Featured image URL
- `title` (string): Article/video title
- `description?` (string): Content description
- `type?` ('article' | 'video'): Content type (default: 'article')
- `author?` (string): Author name
- `publishedAt?` (string): Publication date
- `className?` (string): Additional CSS classes

**Usage**:
```tsx
<StoryCard 
  image="/studio-feature.jpg"
  title="The Best Studio Monitors Under $500"
  description="Our experts review the top affordable studio monitors"
  type="article"
  author="Reverb Staff"
  publishedAt="2 days ago"
/>
```

---

## SearchResultCard

**Purpose**: Horizontal layout cards for search results and recent searches.

**Features**:
- Horizontal layout with image and content
- Compact square image
- Title with hover effects
- Category and last searched information
- Clock icon for timestamp
- Hover animations

**Props**:
- `image` (string): Result image URL
- `title` (string): Search result title
- `category?` (string): Item category
- `lastSearched?` (string): Last search timestamp
- `className?` (string): Additional CSS classes

**Usage**:
```tsx
<SearchResultCard 
  image="/amp.jpg"
  title="Marshall Amplifiers"
  category="Amplifiers"
  lastSearched="2 hours ago"
/>
```

---

## Footer

**Purpose**: Site footer with comprehensive links, newsletter signup, and social media.

**Features**:
- Four-column link grid (responsive to 2 columns on mobile)
- Newsletter subscription form
- Social media icons
- Company branding
- Copyright information
- Proper dark styling with light text

**Props**: None (static component)

**Usage**:
```tsx
<Footer />
```

---

## Design System

All components use a consistent design system with:

- **Colors**: HSL-based semantic tokens (primary, secondary, muted, etc.)
- **Typography**: Consistent font sizes and weights
- **Spacing**: Standardized padding and margins
- **Shadows**: Subtle elevation effects
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first responsive design
- **Accessibility**: Proper ARIA labels and semantic HTML

## Usage Notes

- All components are fully responsive and mobile-optimized
- Components use Tailwind CSS with custom design tokens
- Images should be optimized for web performance
- Components follow React best practices with TypeScript
- All interactive elements have proper hover and focus states