import { Hammer, Layers, Paintbrush, Scissors, Cpu, Factory, ShieldCheck, Microscope, Zap, Ruler } from 'lucide-react';

export const servicesData = [
    {
        slug: "metal-stamping",
        title: "Precision Metal Stamping",
        h1: "Tier-1 Industrial Stamping & High-Volume Pressing Unit",
        icon: <Hammer className="w-12 h-12" />,
        description: "Aero Enterprises operates a sophisticated stamping division in Unit I, engineered for high-speed repeatability. We specialize in progressive die operations and deep drawing, ensuring that complex automotive and structural components are manufactured with zero geometric deviation.",
        expertiseNote: "Our engineering team optimizes tool design to increase material yield by up to 15%, directly reducing per-part costs for our clients.",
        capabilities: [
            "Progressive Die Stamping (Multi-stage)",
            "Deep Drawing Quality (DDQ) Processing",
            "Precision Blanking & Piercing",
            "Compound Die Tooling Solutions",
            "In-House Tool Maintenance & Calibration"
        ],
        specs: [
            { label: "Tonnage Range", value: "10T to 150T" },
            { label: "Dimensional Tolerance", value: "±0.05mm to ±0.1mm" },
            { label: "Material Capability", value: "CR, HR, GI, SS, Brass, Copper" },
            { label: "Max Stroke Speed", value: "60-100 Strokes/Min" }
        ],
        qualityProtocol: [
            "First-off inspection with digital calipers",
            "Hourly batch sampling for gauge consistency",
            "Final surface integrity audit before finishing"
        ],
        machineryUsed: "150T Hydraulic Press, 100T Mechanical Press, 50T Dual-Action Press",
        industries: ["Automotive OEMs", "Electrical Switchgear", "Consumer Appliances", "Industrial Hardware"]
    },
    {
        slug: "cnc-bending",
        title: "CNC Multi-Axis Bending",
        h1: "High-Precision CNC Press Brake Forming (±0.5° Accuracy)",
        icon: <Layers className="w-12 h-12" />,
        description: "Our CNC bending facility features multi-axis back-gauge systems that allow for the formation of intricate profiles in a single setup. By utilizing synchronized hydraulic systems, we maintain perfect angular accuracy across the entire 3100mm bed length.",
        expertiseNote: "We utilize advanced Springback Compensation software to ensure the first part is as accurate as the thousandth part.",
        capabilities: [
            "Complex Multi-Stage Bending",
            "Hemming & Safety Edge Forming",
            "Large Format Structural Bending",
            "Radius Forming for Architectural Accents",
            "Scratch-Free Bending for Polished SS"
        ],
        specs: [
            { label: "Max Bed Length", value: "3100mm" },
            { label: "Max Press Force", value: "100 Metric Tonnes" },
            { label: "Angular Precision", value: "±0.5 Degrees" },
            { label: "Max Thickness", value: "8mm MS / 5mm SS" }
        ],
        qualityProtocol: [
            "Digital protractor angle verification",
            "Bend allowance calculation per material K-Factor",
            "Tooling wear monitoring for radius consistency"
        ],
        machineryUsed: "Multi-Axis CNC Press Brake (100T/3100mm)",
        industries: ["HVAC Housing", "Server Rack Cabinets", "Medical Grade Enclosures", "Telecommunications"]
    },
    {
        slug: "powder-coating",
        title: "Industrial Powder Coating",
        h1: "7-Tank Pre-Treatment & Conveyorized Finishing Unit",
        icon: <Paintbrush className="w-12 h-12" />,
        description: "Surface integrity is paramount. Our integrated finishing unit employs a rigorous 7-tank chemical pre-treatment process to remove all impurities, followed by automated electrostatic spraying.",
        expertiseNote: "Our 'Green-Finish' protocol ensures all chemical waste from the 7-tank process is treated according to industrial environmental standards.",
        capabilities: [
            "7-Stage Chemical Pre-treatment",
            "Automated Electrostatic Spraying",
            "High-Temperature Curing (Up to 220°C)",
            "Textured, Matte, and Glossy RAL Finishes",
            "Anti-Corrosive Zinc-Rich Priming"
        ],
        specs: [
            { label: "Batch Oven 1", value: "4 x 8 x 4 Ft" },
            { label: "Pre-Treatment", value: "7-Tank Process" },
            { label: "Coating Depth", value: "60 - 120 Microns" },
            { label: "Cross-Hatch Test", value: "Class 5B Compliance" }
        ],
        qualityProtocol: [
            "DFT (Dry Film Thickness) Digital Measurement",
            "Impact & Adhesion (Cross-Cut) Testing",
            "Curing temperature curve monitoring"
        ],
        machineryUsed: "7-Tank Chemical Line, 2 Industrial Booths, 3 Thermostatically Controlled Ovens",
        industries: ["Outdoor Infrastructure", "Automotive Parts", "HVAC Assemblies", "Retail Fixtures"]
    },
    {
        slug: "laser-cutting",
        title: "Fiber Laser Cutting",
        h1: "High-Speed 3000W Fiber Laser Profiling (±0.1mm Accuracy)",
        icon: <Scissors className="w-12 h-12" />,
        description: "Using high-density fiber laser technology, we provide precision profiling with virtually no heat-affected zone (HAZ). This allows for intricate patterns and clean edges that require zero secondary grinding.",
        expertiseNote: "We provide automated nesting services that optimize sheet usage, significantly reducing raw material wastage for the client.",
        capabilities: [
            "High-Speed Profile Profiling",
            "Micro-Joint Nesting",
            "Complex Geometric Perforation",
            "Clean-Cut Technology for Stainless Steel",
            "Rapid Prototype Development"
        ],
        specs: [
            { label: "Laser Power", value: "3000W Fiber Source" },
            { label: "Max Sheet Size", value: "1500 x 3000mm" },
            { label: "Cutting Tolerance", value: "±0.1mm" },
            { label: "Max Thick (MS)", value: "20mm" }
        ],
        qualityProtocol: [
            "CAD/CAM Blueprint Verification",
            "Edge burr and dross inspection",
            "Dimensional coordinate check"
        ],
        machineryUsed: "3000W CNC Fiber Laser Cutting System",
        industries: ["Aerospace Components", "Architectural Facades", "Machine Guards", "Custom Signage"]
    },
    {
        slug: "welding",
        title: "Certified Industrial Welding",
        h1: "Precision MIG / TIG / Spot Welding & Assembly Services",
        icon: <Factory className="w-12 h-12" />,
        description: "Aero Enterprises provides structural and precision welding services using certified technicians. We specialize in TIG welding for thin-gauge stainless steel and heavy-duty MIG welding for structural assemblies.",
        expertiseNote: "All our welding processes follow WPS (Welding Procedure Specification) to ensure maximum joint strength.",
        capabilities: [
            "TIG Welding (SS & Aluminum)",
            "High-Strength MIG Welding",
            "Resistance Spot Welding",
            "Post-Weld Polishing",
            "Full Modular Assembly"
        ],
        specs: [
            { label: "Processes", value: "MIG, TIG, ARC, SPOT" },
            { label: "Weld Material", value: "SS, MS, GI, Aluminum" },
            { label: "Assembly Type", value: "Modular / Structural" },
            { label: "Standard", value: "ASME / ISO Compliant" }
        ],
        qualityProtocol: [
            "Visual weld bead inspection",
            "Dye Penetrant Testing (DPT)",
            "Load-bearing joint analysis"
        ],
        machineryUsed: "Multi-Process Inverter Welding Units, Resistance Spot Welders",
        industries: ["Pharma Equipment", "Structural Frames", "Ducting", "Steel Furniture"]
    },
    {
        slug: "shearing-blanking",
        title: "Precision Shearing & Blanking",
        h1: "High-Speed Hydraulic Shearing for Custom Steel Blanks",
        icon: <Ruler className="w-12 h-12" />,
        description: "Our high-speed shearing line is optimized for preparing precision blanks for secondary operations. With advanced hydraulic stabilization, we ensure perfectly square edges and minimal burr.",
        expertiseNote: "We maintain strict grain-direction alignment during blanking, which is critical for ensuring consistent strength in parts that undergo high-stress bending.",
        capabilities: [
            "Custom Cut-to-Size Blanks",
            "High-Speed Strip Shearing",
            "Square-Edge Guillotine Cutting",
            "Protective PVC Coating for SS Sheets",
            "Rapid Batch Processing"
        ],
        specs: [
            { label: "Max Width", value: "2500mm" },
            { label: "Max MS Thickness", value: "6.0mm" },
            { label: "Max SS Thickness", value: "4.0mm" },
            { label: "Parallelism", value: "±0.2mm" }
        ],
        qualityProtocol: [
            "Diagonal measurement for squareness check",
            "Blade gap calibration per material gauge",
            "Surface scratch prevention audit"
        ],
        machineryUsed: "Hydraulic NC Shearing Machine, Precision Guillotine System",
        industries: ["General Fabrication", "Furniture Frameworks", "Sheet Metal Traders", "Appliance Enclosures"]
    },
    {
        slug: "technical-consultation",
        title: "Metallurgical Consultation",
        h1: "Material Grade Selection & Engineering Optimization",
        icon: <Microscope className="w-12 h-12" />,
        description: "Moving beyond supply, we provide engineer-level consultation to solve critical manufacturing challenges. From choosing between CR1 and CR4 to analyzing material failure, we ensure your metallurgy matches your engineering demands.",
        expertiseNote: "Our 36-year group pedigree allows us to identify material wastage risks in your design and suggest nesting strategies that save up to 18% in raw material costs.",
        capabilities: [
            "Material Grade Optimization",
            "Nesting & Yield Analysis",
            "Failure Analysis & Troubleshooting",
            "Supply Chain Logistics Planning",
            "MTC Technical Verification"
        ],
        specs: [
            { label: "Experience", value: "36+ Years" },
            { label: "Audit Readiness", value: "Tier-1 OEM Standards" },
            { label: "Material Expertise", value: "HR, CR, GI, SS, PO" },
            { label: "Compliance", value: "ISO 9001:2015" }
        ],
        qualityProtocol: [
            "Chemical composition verification",
            "Mechanical property benchmarking",
            "Regulatory compliance audit"
        ],
        machineryUsed: "Digital Calibrated Weighbridge, Spectral Analysis, ERP Tracking",
        industries: ["Procurement Heads", "Design Engineers", "SME Manufacturers", "Government Contractors"]
    }
];