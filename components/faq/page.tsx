"use client"
import { ServicesFa, LocationsFa, ServiceAirportFa } from "@/data/Fa";
import { FA } from "../FA";
import { getDictionary } from "@/lib/get-dictionary";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function FAQ() {
  const params = useParams();
        const [dict, setDict] = useState<any>(null);
  
    useEffect(() => {
      const loadDict = async () => {
        const data = await getDictionary();
        setDict(data);
      };
  
      loadDict();
    }, []);
  
    if (!dict) return <div>Loading...</div>; 
    const t = dict.faq;
    
 return (
    <div className="max-w-6xl mx-auto px-6 py-24 space-y-16 mt-4">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t.title}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">{t.description}</p>
      </div>

      {/* Locations Section */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">{t.sections.locations.title}</h2>
          <p className="text-gray-500 text-sm">{t.sections.locations.description}</p>
        </div>
        <FA data={LocationsFa} />
      </div>

      {/* Services Section */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">{t.sections.services.title}</h2>
          <p className="text-gray-500 text-sm">{t.sections.services.description}</p>
        </div>
        <FA data={ServicesFa} />
      </div>

      {/* Airport Section */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">{t.sections.airport.title}</h2>
          <p className="text-gray-500 text-sm">{t.sections.airport.description}</p>
        </div>
        <FA data={ServiceAirportFa} />
      </div>
    </div>
  );
}
