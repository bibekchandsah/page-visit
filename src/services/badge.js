// Icon SVG paths
const icons = {
  eye: '<path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>',
  github: '<path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>',
  fire: '<path fill="currentColor" d="M11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.47-.3 1.42-1.06 1.42-1.06s1.79 1.36 1.79 3.2c0 2.44-1.12 4.12-2.8 4.12zm.29-16s1.18 2.15 1.18 4.04c0 1.73-1.02 3.14-2.28 3.52.01 0 .01 0 0 0-1.89.54-3.27 2.2-3.27 4.3C7.63 18.08 9.91 21 12.5 21c3.22 0 5.83-3.67 5.83-7.18 0-5.89-6.33-9.82-6.33-9.82z"/>',
  star: '<path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>',
  chart: '<path fill="currentColor" d="M3 13h2v8H3v-8zm4-6h2v14H7V7zm4-4h2v18h-2V3zm4 8h2v10h-2V11zm4-4h2v14h-2V7z"/>',
  heart: '<path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>',
  rocket: '<path fill="currentColor" d="M12 2.5c0 0-6.5 5-6.5 13.5 0 2.5 1.5 4.5 3.5 5.5l3-3 3 3c2-1 3.5-3 3.5-5.5C18.5 7.5 12 2.5 12 2.5zM12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM5 21l2-2.5c-.5-.5-1-1.2-1.5-2L5 21zm14 0l-.5-4.5c-.5.8-1 1.5-1.5 2L19 21z"/>',
  user: '<path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>',
  code: '<path fill="currentColor" d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>',
  globe: '<path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>'
};

// Style templates
const styles = {
  flat: {
    borderRadius: 0,
    shadow: false,
    gradient: false,
    border: false
  },
  rounded: {
    borderRadius: 6,
    shadow: false,
    gradient: false,
    border: false
  },
  pill: {
    borderRadius: 20,
    shadow: false,
    gradient: false,
    border: false
  },
  neon: {
    borderRadius: 6,
    shadow: true,
    gradient: false,
    border: true,
    glowColor: '#00ff00'
  },
  glass: {
    borderRadius: 10,
    shadow: true,
    gradient: true,
    border: true,
    opacity: 0.8
  }
};

// Format count number
function formatCount(count, format = 'normal') {
  const num = parseInt(count, 10) || 0;
  
  switch (format) {
    case 'short':
      if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
      if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
      return num.toString();
    case 'comma':
      return num.toLocaleString();
    default:
      return num.toString();
  }
}

// Parse color - supports hex and gradients
function parseColor(color) {
  if (!color) return '#4c1';
  
  // Remove # if present
  color = color.replace(/^#/, '');
  
  // Check if it's a gradient (comma-separated colors)
  if (color.includes(',')) {
    return color.split(',').map(c => `#${c.trim().replace(/^#/, '')}`);
  }
  
  return `#${color}`;
}

// Generate gradient definition
function generateGradient(colors, id = 'bg-gradient') {
  if (!Array.isArray(colors)) return '';
  
  const stops = colors.map((color, i) => {
    const offset = (i / (colors.length - 1)) * 100;
    return `<stop offset="${offset}%" stop-color="${color}"/>`;
  }).join('');
  
  return `<linearGradient id="${id}" x1="0%" y1="0%" x2="100%" y2="0%">${stops}</linearGradient>`;
}

// Main badge generator
export function generateBadge(options = {}) {
  const {
    count = 0,
    label = 'Profile Views',
    style = 'flat',
    icon = 'eye',
    bg = '4c1',
    textColor = 'fff',
    border = false,
    borderColor = '333',
    font = 'Verdana, Geneva, sans-serif',
    countFormat = 'normal'
  } = options;
  
  const styleConfig = styles[style] || styles.flat;
  const formattedCount = formatCount(count, countFormat);
  
  // Calculate dimensions - handle no icon case
  const hasIcon = icon && icon !== 'none' && icons[icon];
  const iconWidth = hasIcon ? 24 : 0;
  const padding = 10;
  const labelWidth = label.length * 7 + padding * 2;
  const countWidth = formattedCount.length * 8 + padding * 2;
  const totalWidth = iconWidth + labelWidth + countWidth + padding;
  const height = 28;
  
  // Parse colors
  const bgColor = parseColor(bg);
  const txtColor = parseColor(textColor);
  const bdrColor = parseColor(borderColor);
  
  const isGradient = Array.isArray(bgColor);
  const gradientId = 'badge-bg';
  
  // Build SVG
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="${height}" viewBox="0 0 ${totalWidth} ${height}">`;
  
  // Definitions
  svg += '<defs>';
  
  // Add gradient if needed
  if (isGradient) {
    svg += generateGradient(bgColor, gradientId);
  }
  
  // Glass effect gradient
  if (style === 'glass') {
    svg += `<linearGradient id="glass-shine" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.3)"/>
      <stop offset="50%" stop-color="rgba(255,255,255,0.1)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
    </linearGradient>`;
  }
  
  // Drop shadow for neon/glass
  if (styleConfig.shadow) {
    svg += `<filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="${style === 'neon' ? (styleConfig.glowColor || '#00ff00') : '#000'}" flood-opacity="0.3"/>
    </filter>`;
  }
  
  svg += '</defs>';
  
  // Background
  const rx = styleConfig.borderRadius;
  const fillColor = isGradient ? `url(#${gradientId})` : bgColor;
  const filterAttr = styleConfig.shadow ? 'filter="url(#shadow)"' : '';
  const opacityAttr = styleConfig.opacity ? `opacity="${styleConfig.opacity}"` : '';
  
  svg += `<rect x="0.5" y="0.5" width="${totalWidth - 1}" height="${height - 1}" rx="${rx}" fill="${fillColor}" ${filterAttr} ${opacityAttr}/>`;
  
  // Glass shine overlay
  if (style === 'glass') {
    svg += `<rect x="0.5" y="0.5" width="${totalWidth - 1}" height="${height / 2}" rx="${rx}" fill="url(#glass-shine)"/>`;
  }
  
  // Border
  if (border || styleConfig.border) {
    svg += `<rect x="0.5" y="0.5" width="${totalWidth - 1}" height="${height - 1}" rx="${rx}" fill="none" stroke="${bdrColor}" stroke-width="1"/>`;
  }
  
  // Label section divider
  const labelSectionWidth = iconWidth + labelWidth;
  svg += `<rect x="${labelSectionWidth}" y="0" width="1" height="${height}" fill="rgba(0,0,0,0.1)"/>`;
  
  // Icon (only if present)
  if (hasIcon) {
    const iconPath = icons[icon];
    const iconY = (height - 16) / 2;
    svg += `<g transform="translate(${padding}, ${iconY}) scale(0.67)" fill="${txtColor}">${iconPath}</g>`;
  }
  
  // Label text
  const labelX = hasIcon ? iconWidth + padding : padding;
  const textY = height / 2 + 4;
  svg += `<text x="${labelX}" y="${textY}" fill="#${String(txtColor).replace('#', '')}" font-family="${font}" font-size="11" font-weight="400">${escapeXml(label)}</text>`;
  
  // Count text
  const countX = labelSectionWidth + padding;
  svg += `<text x="${countX}" y="${textY}" fill="#${String(txtColor).replace('#', '')}" font-family="${font}" font-size="12" font-weight="bold">${formattedCount}</text>`;
  
  svg += '</svg>';
  
  return svg;
}

// Escape XML special characters
function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Convert SVG to PNG (fallback - returns SVG as PNG is not available without native modules)
export async function svgToPng(svg) {
  // PNG conversion requires sharp or resvg native modules
  // Return null to signal fallback to SVG
  return null;
}

// Generate JSON response
export function generateJson(count, username, repo = null) {
  return {
    username,
    repo,
    count: parseInt(count, 10) || 0,
    formatted: formatCount(count, 'comma'),
    timestamp: new Date().toISOString()
  };
}

// Generate custom badge from user template
export function generateCustomBadge(template, options = {}) {
  const {
    count = 0,
    label = 'Views',
    bg = '4c1',
    textColor = 'fff',
    icon = 'eye',
    countFormat = 'normal'
  } = options;
  
  const formattedCount = formatCount(count, countFormat);
  
  // Generate icon SVG for custom template - center vertically based on badge height
  const iconPath = icons[icon] || '';
  const iconColor = textColor.startsWith('#') ? textColor : `#${textColor}`;
  
  // Extract height from template for proper icon centering
  const heightMatch = template.match(/height="(\d+)"/);
  const badgeHeight = heightMatch ? parseInt(heightMatch[1]) : 40;
  const iconSize = 16; // 24x24 scaled by 0.67
  const yOffset = (badgeHeight - iconSize) / 2;
  
  const hasIcon = icon && icon !== 'none' && iconPath;
  const iconSvg = hasIcon ? `<g transform="translate(10, ${yOffset}) scale(0.67)" fill="${iconColor}">${iconPath}</g>` : '';
  const labelX = hasIcon ? '32' : '12';
  
  // Replace placeholders in template
  let svg = template
    .replace(/\{\{count\}\}/g, escapeXml(formattedCount))
    .replace(/\{\{label\}\}/g, escapeXml(label))
    .replace(/\{\{bg\}\}/g, bg.replace('#', ''))
    .replace(/\{\{textColor\}\}/g, textColor.replace('#', ''))
    .replace(/\{\{icon\}\}/g, iconSvg)
    .replace(/\{\{labelX\}\}/g, labelX);
  
  // Basic sanitization - remove script tags and event handlers
  svg = svg
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/\bon\w+\s*=/gi, 'data-removed=');
  
  return svg;
}

export { formatCount, parseColor };
