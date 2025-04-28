import React from 'react';
import DefaultDocSidebarItem from '@theme-original/DocSidebarItem';
import { 
  Shield, 
  BookOpen, 
  Lock, 
  AlertTriangle, 
  FileText, 
  Key, 
  LightbulbIcon, 
  Settings,
  Rocket,
  Video,
  Timer,
  Layers,
  Clock,
  Zap,
  FolderOpen,
  Folder,
  Pause,
  Eye,
  Repeat,
  SplinePointer,
  Map
} from 'lucide-react';

// Mapeo ampliado de nombres de iconos a componentes
const iconMap = {
  // Iconos de seguridad
  'shield': Shield,
  'book-open': BookOpen,
  'lock': Lock,
  'alert-triangle': AlertTriangle,
  'file-text': FileText,
  'key': Key,
  'lightbulb': LightbulbIcon,
  'settings': Settings,
  
  // Iconos de performance
  'rocket': Rocket,
  'video': Video,
  'timer': Timer,
  'layers': Layers,
  'clock': Clock,
  'zap': Zap,
  
  // Iconos de sources
  'folder-open': FolderOpen,
  'folder': Folder,
  'pause': Pause,
  'eye': Eye,
  'repeat': Repeat,
  'map': Map,
  'spline-pointer': SplinePointer
};

// Función para procesar las etiquetas y reemplazar los prefijos con iconos
function processLabel(label) {
  if (typeof label !== 'string' || !label.startsWith('icon:')) {
    return label;
  }

  const parts = label.split(' ');
  const iconName = parts[0].replace('icon:', '');
  const text = parts.slice(1).join(' ');
  
  if (iconMap[iconName]) {
    const IconComponent = iconMap[iconName];
    return (
      <>
        <IconComponent className="sidebar-icon" size={18} />
        <span>{text}</span>
      </>
    );
  }
  
  return label;
}

export default function DocSidebarItemWrapper(props) {
  const modifiedProps = { ...props };
  
  // Procesar la etiqueta si existe
  if (props.item && props.item.label) {
    modifiedProps.item = {
      ...props.item,
      label: processLabel(props.item.label)
    };
  }
  
  return <DefaultDocSidebarItem {...modifiedProps} />;
}