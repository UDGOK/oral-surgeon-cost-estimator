export interface ProjectBasics {
  projectName: string
  location: {
    street: string
    city: string
    state: string
    zipCode: string
  }
  totalSquareFootage: number
  desiredCompletionDate: string
  projectTimeline: 'standard' | 'accelerated' | 'relaxed'
  projectType: 'new-construction' | 'renovation' | 'tenant-improvement'
  buildingType: 'ground-floor' | 'upper-floor' | 'basement'
}

export interface RoomConfiguration {
  // Treatment/Clinical Rooms
  treatmentRooms: {
    count: number // 1-20 rooms
    size: 'compact' | 'standard' | 'large' | 'premium'
    hasWindows: boolean
    ceilingHeight: number
    specialFeatures: string[]
  }
  consultationRooms: {
    count: number // 0-10 rooms
    size: 'small' | 'medium' | 'large'
    hasWindows: boolean
  }
  recoveryRooms: {
    count: number // 0-5 rooms
    beds: number
    privateRooms: number
    sharedRooms: number
  }
  labSpaces: {
    count: number // 0-3 rooms
    hasLab: boolean
    size: number
    equipmentLevel: 'basic' | 'advanced' | 'full-service'
    hasCADCAM: boolean
    has3DPrinter: boolean
  }
  sterilizationAreas: {
    centralSterile: {
      size: number
      equipmentLevel: 'basic' | 'advanced' | 'comprehensive'
    }
    dirtyUtility: {
      size: number
      required: boolean
    }
    cleanUtility: {
      size: number
      required: boolean
    }
  }
}

export interface MedicalGasRequirements {
  nitrousOxide: {
    required: boolean
    outlets: Array<{
      room: string
      count: number
      location: string
    }>
    centralSupply: boolean
    scavengingSystem: boolean
    manifoldLocation: string
    emergencyShutoffs: number
  }
  oxygen: {
    required: boolean
    outlets: Array<{
      room: string
      count: number
      location: string
    }>
    centralSupply: boolean
    backupSystem: boolean
    manifoldLocation: string
    emergencyShutoffs: number
  }
  medicalAir: {
    required: boolean
    outlets: Array<{
      room: string
      count: number
      location: string
    }>
    oilFree: boolean
    backupCompressor: boolean
    manifoldLocation: string
  }
  vacuumSystem: {
    required: boolean
    outlets: Array<{
      room: string
      count: number
      location: string
    }>
    centralSystem: boolean
    backupPump: boolean
    manifoldLocation: string
  }
}

export interface EquipmentIntegration {
  dentalChairs: {
    count: number
    type: 'basic' | 'mid-range' | 'premium'
    manufacturer: string
    integratedDelivery: boolean
  }
  xrayUnits: {
    intraoral: {
      count: number
      digital: boolean
    }
    panoramic: {
      count: number
      digital: boolean
    }
    cephalometric: {
      count: number
    }
  }
  cbct: {
    hasUnit: boolean
    model?: string
    shieldingRequired?: boolean
  }
  sterilizationEquipment: {
    autoclaves: {
      count: number
      size: 'small' | 'medium' | 'large'
    }
    ultrasonicCleaners: number
    sealers: number
  }
  surgicalEquipment: {
    surgicalLights: number
    monitors: number
    anesthesiaMachines: number
    surgicalTables: number
  }
  labEquipment: {
    models3dPrinter: boolean
    scanners: number
    millingMachine: boolean
  }
}

export interface CostBreakdown {
  sitePrep: number
  demolition: number
  framingDrywallInsulation: number
  hvac: number
  electrical: number
  plumbing: number
  millworkSurfaces: number
  flooringDoors: number
  paint: number
  medicalGas: number
  specialEquipment: number
  permits: number
  generalConditions: number
  overhead: number
  profit: number
  contingency: number
  total: number
}

export interface EstimateData {
  id?: string
  projectBasics: ProjectBasics
  roomConfiguration: RoomConfiguration
  medicalGasRequirements: MedicalGasRequirements
  equipmentIntegration: EquipmentIntegration
  costBreakdown?: CostBreakdown
  createdAt?: string
  updatedAt?: string
  status: 'draft' | 'completed' | 'archived'
}