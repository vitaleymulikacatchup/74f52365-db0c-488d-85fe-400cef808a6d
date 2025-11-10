"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardThree from '@/components/sections/metric/MetricCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { BookOpen, Coins, Compass, Crown, Gem, Globe, HelpCircle, Mail, Map, MapPin, Shield, Star, Trophy, Users, Zap } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="large"
      sizing="medium"
      background="floatingGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            {name: "Adventures", id: "feature"},
            {name: "Pricing", id: "pricing"},
            {name: "Team", id: "team"},
            {name: "FAQ", id: "faq"},
            {name: "Contact", id: "contact"}
          ]}
          brandName="TreasureQuest"
          button={{
            text: "Start Hunt",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Embark on Epic Treasure Adventures"
          description="Discover hidden treasures, solve ancient mysteries, and experience the thrill of the hunt with our expertly crafted treasure hunting expeditions"
          tag="Adventure Awaits"
          tagIcon={Map}
          buttons={[
            {text: "Start Your Quest", href: "contact"},
            {text: "View Adventures", href: "feature"}
          ]}
          imageSrc="https://pixabay.com/get/gb82b06ce570d8d7e505de39a47c4f744301bf74cc3d5103fdce1d25d28c2e26b5e9686939848a5f818d1ae324067bce9780ae7964b027bc3f630f0c75b9c0e70_1280.jpg"
          imageAlt="Treasure map and golden chest adventure"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="The Ultimate Treasure Hunting Experience"
          description="We combine cutting-edge technology with ancient wisdom to create unforgettable treasure hunting adventures that challenge your mind and reward your spirit"
          tag="About Our Quest"
          tagIcon={Crown}
          textboxLayout="default"
          bulletPoints={[
            {
              title: "Expert Guidance",
              description: "Professional treasure hunters and archaeologists lead every expedition",
              icon: Users
            },
            {
              title: "Authentic Adventures",
              description: "Real historical locations with genuine treasure hunting opportunities",
              icon: MapPin
            },
            {
              title: "Modern Tools",
              description: "State-of-the-art metal detectors and mapping technology",
              icon: Zap
            }
          ]}
          imageSrc="https://pixabay.com/get/g6c644a832b2824c6a40d4152773ca6cfffb59ebb8a4a9ec6269e4f17f7daaa239aedb2eff8c4920a7b9f8b238003c28d71ed6472261dbef27e5645c991dae1bf_1280.jpg"
          imageAlt="Ancient treasure map"
          imagePosition="right"
          buttons={[
            {text: "Learn More", href: "feature"}
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardSeven
          title="Adventure Features"
          description="Discover what makes our treasure hunts extraordinary"
          tag="What We Offer"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: 1,
              title: "Ancient Map Reading",
              description: "Learn to decipher historical maps and ancient symbols to uncover hidden treasure locations using traditional techniques passed down through generations",
              imageSrc: "https://pixabay.com/get/g6c644a832b2824c6a40d4152773ca6cfffb59ebb8a4a9ec6269e4f17f7daaa239aedb2eff8c4920a7b9f8b238003c28d71ed6472261dbef27e5645c991dae1bf_1280.jpg",
              imageAlt: "Ancient treasure map with symbols"
            },
            {
              id: 2,
              title: "Modern Detection Tools",
              description: "Use professional-grade metal detectors and ground-penetrating radar to locate buried treasures with precision and accuracy",
              imageSrc: "https://pixabay.com/get/g3de372baeb9171873858a348f4f558cc8da1413454d7e6a3306f2f3fc7582071c74169ef0c0e9212abe01f26208c15c3af5bc2e7ce7fb54a657ba8b193bfd370_1280.jpg",
              imageAlt: "Modern compass and navigation tools"
            },
            {
              id: 3,
              title: "Treasure Recovery",
              description: "Master the art of careful excavation and proper treasure handling while preserving historical artifacts and following archaeological protocols",
              imageSrc: "https://pixabay.com/get/ge943c2d472842214b2a15821fca28c3da3c41d03a356b3b736b71ad18529c0e4acfe7c3dab499b1534ea82e602bac2f2fbe3585746c20ab1955bbe73fe80f9c5_1280.jpg",
              imageAlt: "Golden treasure chest with coins"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Choose Your Adventure"
          description="Select the perfect treasure hunting package for your experience level"
          tag="Pricing"
          tagIcon={Coins}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "explorer",
              price: "$299",
              name: "Explorer Package",
              features: ["Half-day treasure hunt", "Basic equipment provided", "Beginner-friendly guidance", "Keep small finds"],
              buttons: [
                {text: "Book Explorer", href: "contact"},
                {text: "Learn More", href: "faq"}
              ]
            },
            {
              id: "adventurer",
              badge: "Most Popular",
              badgeIcon: Crown,
              price: "$599",
              name: "Adventurer Package",
              features: ["Full-day treasure hunt", "Professional equipment", "Expert guide included", "Treasure sharing agreement", "Lunch and refreshments"],
              buttons: [
                {text: "Book Adventure", href: "contact"},
                {text: "Learn More", href: "faq"}
              ]
            },
            {
              id: "legend",
              price: "$1,299",
              name: "Legend Package",
              features: ["3-day expedition", "Premium equipment suite", "Personal archaeologist", "Major treasure sharing", "All meals included", "Accommodation provided"],
              buttons: [
                {text: "Book Legend", href: "contact"},
                {text: "Learn More", href: "faq"}
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardThree
          title="Our Treasure Hunting Success"
          description="Proven results from countless adventures"
          tag="Achievements"
          tagIcon={Trophy}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          metrics={[
            {
              id: "1",
              icon: Gem,
              title: "Treasures Found",
              value: "847"
            },
            {
              id: "2",
              icon: Users,
              title: "Happy Hunters",
              value: "2,340+"
            },
            {
              id: "3",
              icon: MapPin,
              title: "Locations Explored",
              value: "156"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Expert Treasure Hunters"
          description="Experienced professionals who will guide your adventure"
          tag="Our Team"
          tagIcon={Shield}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Captain Jack Sterling",
              role: "Lead Explorer",
              description: "20+ years of treasure hunting experience across 5 continents. Former marine archaeologist with expertise in ancient civilizations.",
              imageSrc: "https://pixabay.com/get/g6e83896d8d04608b6c73de609c1a8227c719f4544ce45bdb5d09b7765630cab1d111396f2e0bf59e993927f020f95822875018811e2fa16f2b72ac6eb53478f5_1280.jpg",
              imageAlt: "Captain Jack Sterling",
              socialLinks: [
                {icon: Globe, url: "https://example.com"},
                {icon: Mail, url: "mailto:jack@treasurequest.com"}
              ]
            },
            {
              id: "2",
              name: "Dr. Sarah Mitchell",
              role: "Chief Archaeologist",
              description: "PhD in Archaeology with specialization in medieval treasures. Published author on historical artifact recovery and preservation.",
              imageSrc: "https://pixabay.com/get/gf6e3890131111760523dade5aaa97c87d707d44be64ee5b3ed9dfc921703e954916cad9a12cfb2e7b9a643f1f16e8a7853f3a6784bfd18696327f93b9b11075f_1280.jpg",
              imageAlt: "Dr. Sarah Mitchell",
              socialLinks: [
                {icon: BookOpen, url: "https://example.com"},
                {icon: Mail, url: "mailto:sarah@treasurequest.com"}
              ]
            },
            {
              id: "3",
              name: "Marcus Rodriguez",
              role: "Navigation Expert",
              description: "Master navigator and cartographer specializing in ancient maps. Expert in GPS technology and traditional navigation methods.",
              imageSrc: "https://pixabay.com/get/ge8fef61ce565cc4c58dec464aeeee3c3265357d00f0465350aae903609d7575ec3860cfabd26c226780fab0e3dd375058cd0b0f7aa6e6a20bb67ac37e637d1a0_1280.jpg",
              imageAlt: "Marcus Rodriguez",
              socialLinks: [
                {icon: Compass, url: "https://example.com"},
                {icon: Mail, url: "mailto:marcus@treasurequest.com"}
              ]
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Treasure Hunter's Guide"
          description="Everything you need to know about your adventure"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Do I need any experience to join a treasure hunt?",
              content: "No experience necessary! Our expert guides will teach you everything you need to know, from reading maps to using detection equipment. We welcome adventurers of all skill levels."
            },
            {
              id: "2",
              title: "What should I bring on a treasure hunt?",
              content: "We provide all specialized equipment including metal detectors, maps, and excavation tools. You should bring comfortable outdoor clothing, sturdy boots, sun protection, and a sense of adventure!"
            },
            {
              id: "3",
              title: "Can I keep the treasures I find?",
              content: "Treasure sharing agreements vary by package. Explorer package participants keep small finds, while Adventurer and Legend packages include profit sharing on larger discoveries, following all legal requirements."
            },
            {
              id: "4",
              title: "Are your treasure hunts safe?",
              content: "Safety is our top priority. All expeditions are led by certified guides, we provide safety equipment, and follow strict protocols. We also carry comprehensive insurance for all participants."
            },
            {
              id: "5",
              title: "What locations do you explore?",
              content: "We explore historically significant sites across multiple regions, including old settlements, battlefield sites, and areas with documented treasure legends. All locations are legally accessible with proper permissions."
            },
            {
              id: "6",
              title: "How do I book a treasure hunting adventure?",
              content: "Simply contact us through our website or call our booking hotline. We'll discuss your interests, experience level, and available dates to match you with the perfect adventure package."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Adventure Chronicles"
          description="Stories and insights from the field"
          tag="Blog"
          tagIcon={BookOpen}
          textboxLayout="default"
          animationType="blur-reveal"
          carouselMode="buttons"
          blogs={[
            {
              id: "1",
              category: "Discovery",
              title: "The Golden Medallion of Lost Creek",
              excerpt: "How our team uncovered a 300-year-old Spanish medallion and the fascinating story behind it",
              imageSrc: "https://pixabay.com/get/ge943c2d472842214b2a15821fca28c3da3c41d03a356b3b736b71ad18529c0e4acfe7c3dab499b1534ea82e602bac2f2fbe3585746c20ab1955bbe73fe80f9c5_1280.jpg",
              imageAlt: "Golden medallion discovery",
              authorName: "Captain Jack Sterling",
              authorAvatar: "https://pixabay.com/get/g6e83896d8d04608b6c73de609c1a8227c719f4544ce45bdb5d09b7765630cab1d111396f2e0bf59e993927f020f95822875018811e2fa16f2b72ac6eb53478f5_1280.jpg",
              date: "15 Nov 2024"
            },
            {
              id: "2",
              category: "Techniques",
              title: "Ancient Map Reading Secrets",
              excerpt: "Master the art of interpreting historical maps and symbols to find hidden treasure locations",
              imageSrc: "https://pixabay.com/get/g6c644a832b2824c6a40d4152773ca6cfffb59ebb8a4a9ec6269e4f17f7daaa239aedb2eff8c4920a7b9f8b238003c28d71ed6472261dbef27e5645c991dae1bf_1280.jpg",
              imageAlt: "Ancient treasure map",
              authorName: "Dr. Sarah Mitchell",
              authorAvatar: "https://pixabay.com/get/gf6e3890131111760523dade5aaa97c87d707d44be64ee5b3ed9dfc921703e954916cad9a12cfb2e7b9a643f1f16e8a7853f3a6784bfd18696327f93b9b11075f_1280.jpg",
              date: "08 Nov 2024"
            },
            {
              id: "3",
              category: "Adventure",
              title: "Navigation in Uncharted Territory",
              excerpt: "Essential skills for exploring remote locations and finding your way to legendary treasure sites",
              imageSrc: "https://pixabay.com/get/g3de372baeb9171873858a348f4f558cc8da1413454d7e6a3306f2f3fc7582071c74169ef0c0e9212abe01f26208c15c3af5bc2e7ce7fb54a657ba8b193bfd370_1280.jpg",
              imageAlt: "Navigation compass",
              authorName: "Marcus Rodriguez",
              authorAvatar: "https://pixabay.com/get/ge8fef61ce565cc4c58dec464aeeee3c3265357d00f0465350aae903609d7575ec3860cfabd26c226780fab0e3dd375058cd0b0f7aa6e6a20bb67ac37e637d1a0_1280.jpg",
              date: "02 Nov 2024"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Start Your Quest"
          title="Ready for Your Treasure Adventure?"
          description="Join our mailing list for exclusive treasure hunting tips, location updates, and special expedition offers. Your greatest adventure awaits!"
          tagIcon={Compass}
          inputPlaceholder="Enter your email"
          buttonText="Join Quest"
          termsText="By signing up, you agree to receive treasure hunting tips and expedition updates. Adventure responsibly!"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="TreasureQuest"
          copyrightText="© 2025 | TreasureQuest Adventures"
          columns={[
            {
              title: "Adventures",
              items: [
                {label: "Treasure Hunts", href: "feature"},
                {label: "Pricing", href: "pricing"},
                {label: "Locations", href: "about"}
              ]
            },
            {
              title: "Company",
              items: [
                {label: "About Us", href: "about"},
                {label: "Our Team", href: "team"},
                {label: "Blog", href: "blog"}
              ]
            },
            {
              title: "Support",
              items: [
                {label: "FAQ", href: "faq"},
                {label: "Contact", href: "contact"},
                {label: "Safety Guide", href: "faq"}
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}