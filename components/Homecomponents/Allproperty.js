import React from "react";
import { PropertyCard } from "@/components/Homecomponents/property-card";

const Allproperty = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 p-8">
      <div className="container mx-auto">
        <h2 className="mb-8 text-2xl font-semibold text-gray-900">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <PropertyCard
            title="A Container Stay in Mulshi"
            location="Mulshi, Pune"
            rating={4.6}
            price={3499}
            originalPrice={3799}
            description="AC Stay with Swimming Pool, Spa, Restaurant, Meals and more"
            priceSubtext="/Person"
            images={Array(5).fill(
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ilRfjhEw67GdJ0qYULC5QhgqQEiFB4.png"
            )}
            includedMeals="Breakfast Included"
            amenities={["Swimming Pool", "Spa", "Restaurant"]}
          />

          <PropertyCard
            title="Mountain View Villa near Panshet"
            location="Bhagatwadi, Pune"
            rating={4.6}
            price={8999}
            originalPrice={9999}
            description="with Mountain Climbing, River View, Nature Walk, Outdoor & Indoor Games, Jungle Safari"
            priceSubtext="| Max 18 Guests"
            propertyType="Entire Villa"
            images={Array(5).fill(
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ilRfjhEw67GdJ0qYULC5QhgqQEiFB4.png"
            )}
            includedMeals="Breakfast and Dinner"
            amenities={["Mountain View", "River View", "Nature Walk"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Allproperty;
