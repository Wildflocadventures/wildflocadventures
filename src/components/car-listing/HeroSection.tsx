
import { SearchForm } from "@/components/car-listing/SearchForm";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  location: string;
  setLocation: (location: string) => void;
  selectedDates: {
    from: Date | undefined;
    to: Date | undefined;
  };
  setSelectedDates: (dates: { from: Date | undefined; to: Date | undefined }) => void;
}

export const HeroSection = ({
  location,
  setLocation,
  selectedDates,
  setSelectedDates,
}: HeroSectionProps) => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('/lovable-uploads/acc0d00d-6a78-4a1b-92c5-86b40f7716ca.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)"
        }}
      />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            Explore the World with Us
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Discover amazing destinations and create unforgettable memories with our 
            carefully crafted travel experiences.
          </p>
          
          <Button
            onClick={() => {
              document.getElementById('search-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md text-lg transition-colors"
          >
            Start Your Journey
          </Button>
          
          <div id="search-form" className="mt-16">
            <SearchForm
              location={location}
              setLocation={setLocation}
              selectedDates={selectedDates}
              setSelectedDates={setSelectedDates}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
