
import { 
  Layers, 
  Heart, 
  Dumbbell, 
  DoorClosed, 
  ParkingCircle, 
  Wifi, 
  Shirt, 
  Droplets 
} from 'lucide-react';

export const GYM_FEATURES = [
  { id: 'ring', title: 'Professional Ring', description: 'Competition-standard size', icon: Layers },
  { id: 'cardio', title: 'Cardio Area', description: 'Modern cardio equipment', icon: Heart },
  { id: 'weights', title: 'Weight Room', description: 'Full strength training area', icon: Dumbbell },
  { id: 'lockers', title: 'Locker Rooms', description: 'Clean changing facilities', icon: DoorClosed },
  { id: 'parking', title: 'Free Parking', description: 'Ample parking space', icon: ParkingCircle },
  { id: 'wifi', title: 'Free WiFi', description: 'High-speed internet access', icon: Wifi },
  { id: 'shop', title: 'Pro Shop', description: 'Boxing gear and apparel', icon: Shirt },
  { id: 'water', title: 'Water Station', description: 'Stay hydrated during training', icon: Droplets },
];


export const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;
  
  return (
    <div className="feature-item">
      <div className="icon-frame">
        <div className="icon-core">
          <Icon size={24} strokeWidth={2.5} />
        </div>
      </div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  );
};
