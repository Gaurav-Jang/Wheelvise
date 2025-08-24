import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

interface Vehicle {
  Car_ID: number;
  Brand: string;
  Model: string;
  // Year: number;
  Fuel_Type: string;
  Transmission: string;
  Price: number;
  Mileage: number;
  Engine_CC: number;
  Seating_Capacity: number;
  Service_Cost: number;
  image?: string;
}

const Recommendations = () => {
  const [budget, setBudget] = useState<number[]>([500000, 5000000]);
  // const [yearRange, setYearRange] = useState<number[]>([2015, 2025]);
  const [fuelType, setFuelType] = useState("all");
  const [transmission, setTransmission] = useState("all");
  const [seating, setSeating] = useState("all"); 
  const [maxServiceCost, setMaxServiceCost] = useState<number>(50000);

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch vehicles
  useEffect(() => {
    setIsLoading(true);
    fetch("/car_dataset_india.json")
      .then(res => res.json())
      .then((data: Vehicle[]) => setVehicles(data))
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  // Apply filters
  const applyFilters = () => {
    setIsLoading(true); // start loader
    setTimeout(() => {  // simulate processing time
      let filtered = vehicles.filter(
        v =>
          v.Price >= budget[0] &&
          v.Price <= budget[1] 
          // v.Year >= yearRange[0] &&
          // v.Year <= yearRange[1]
      );

      if (fuelType !== "all") filtered = filtered.filter(v => v.Fuel_Type.toLowerCase() === fuelType.toLowerCase());
      if (transmission !== "all") filtered = filtered.filter(v => v.Transmission.toLowerCase() === transmission.toLowerCase());
      if (seating !== "all") filtered = filtered.filter(v => v.Seating_Capacity === Number(seating));
      if (maxServiceCost !== null) filtered = filtered.filter(v => v.Service_Cost <= maxServiceCost);

      setFilteredVehicles(filtered);
      setIsLoading(false); // stop loader
    }, 500); // small delay for smooth loader effect
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Vehicle Recommendations
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enter your requirements and we'll find the best match for you
            </p>
          </div>

          {/* Filter Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Specify Your Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Budget */}
                <div className="flex flex-col space-y-1">
                  <Label className="font-medium">Budget</Label>
                  <span className="text-sm text-muted-foreground">₹{budget[0].toLocaleString()} - ₹{budget[1].toLocaleString()}</span>
                  <Slider min={50000} max={5000000} step={5000} value={budget} onValueChange={setBudget} className="w-full" />
                </div>
                {/* Year Range */}
                {/* <div className="flex flex-col space-y-1">
                  <Label className="font-medium">Year</Label>
                  <span className="text-sm text-muted-foreground">{yearRange[0]} - {yearRange[1]}</span>
                  <Slider min={2000} max={2025} step={1} value={yearRange} onValueChange={setYearRange} className="w-full" />
                </div> */}
                {/* Fuel Type */}
                <div className="flex flex-col space-y-1">
                  <Label className="font-medium">Fuel Type</Label>
                  <Select value={fuelType} onValueChange={setFuelType}>
                    <SelectTrigger><SelectValue placeholder="Select fuel" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any</SelectItem>
                      <SelectItem value="petrol">Petrol</SelectItem>
                      <SelectItem value="diesel">Diesel</SelectItem>
                      <SelectItem value="electric">Electric</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* Transmission */}
                <div className="flex flex-col space-y-1">
                  <Label className="font-medium">Transmission</Label>
                  <Select value={transmission} onValueChange={setTransmission}>
                    <SelectTrigger><SelectValue placeholder="Select transmission" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any</SelectItem>
                      <SelectItem value="manual">Manual</SelectItem>
                      <SelectItem value="automatic">Automatic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* Seating */}
                <div className="flex flex-col space-y-1">
                  <Label className="font-medium">Seating Capacity</Label>
                  <Select value={seating} onValueChange={setSeating}>
                    <SelectTrigger><SelectValue placeholder="Select seating" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="6">6</SelectItem>
                      <SelectItem value="7">7</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* Max Service Cost */}
                <div className="flex flex-col space-y-1">
                  <Label className="font-medium">Max Service Cost</Label>
                  <span className="text-sm text-muted-foreground">₹{maxServiceCost.toLocaleString()}</span>
                  <Slider
                    min={0}
                    max={50000}
                    step={500}
                    value={[maxServiceCost]}
                    onValueChange={(val: number[]) => setMaxServiceCost(val[0])}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <Button onClick={applyFilters} className="flex items-center space-x-2">
                  <Search className="h-4 w-4" />
                  <span>Get Recommendations</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-foreground">
              {isLoading ? "Loading recommendations..." : `${filteredVehicles.length} recommendation(s) found`}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              // Loader Skeleton
              Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="animate-pulse h-64 bg-muted" />
              ))
            ) : filteredVehicles.length === 0 ? (
              <Card className="text-center py-12 col-span-full">
                <CardContent>
                  <Car className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No vehicles found</h3>
                  <p className="text-muted-foreground">Try adjusting your requirements to see results</p>
                </CardContent>
              </Card>
            ) : (
              filteredVehicles.map(v => (
                <Card key={v.Car_ID} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* <div className="relative">
                    {v.image ? <img src={v.image} alt={`${v.Brand} ${v.Model}`} className="w-full h-48 object-cover" /> :
                    <div className="w-full h-48 bg-muted flex items-center justify-center text-muted-foreground">No Image</div>}
                    <Badge className="absolute top-2 right-2 bg-primary">{v.Fuel_Type}</Badge>
                  </div> */}
                  <div className="relative w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex flex-col items-center justify-center text-center rounded-lg shadow-sm">
  {v.image ? (
    <img
      src={v.image}
      alt={`${v.Brand} ${v.Model}`}
      className="w-full h-48 object-cover rounded-lg"
    />
  ) : (
    <div className="flex flex-col items-center justify-center h-full w-full px-2">
      <span className="text-2xl font-bold text-gray-700">{v.Brand}</span>
      <span className="text-md text-gray-600 mt-1">{v.Model}</span>
    </div>
  )}
  <Badge className="absolute top-2 right-2 bg-primary">{v.Fuel_Type}</Badge>
</div>

                  <CardContent className="p-4 text-sm space-y-2">
                    <h3 className="font-semibold">{v.Brand} {v.Model}</h3>
                    <div className="flex justify-between"><span>Price:</span> <span>₹{v.Price.toLocaleString()}</span></div>
                    <div className="flex justify-between"><span>Mileage:</span> <span>{v.Mileage} km/l</span></div>
                    <div className="flex justify-between"><span>Transmission:</span> <span>{v.Transmission}</span></div>
                    <div className="flex justify-between"><span>Seating:</span> <span>{v.Seating_Capacity}</span></div>
                    <div className="flex justify-between"><span>Service Cost:</span> <span>₹{v.Service_Cost.toLocaleString()}</span></div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Recommendations;
