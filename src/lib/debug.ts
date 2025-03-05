
/**
 * Utility function to log helpful information about asset loading
 * This can help debug deployment issues on tiiny.host
 */
export const debugAssetLoading = () => {
  console.log('Document base URL:', document.baseURI);
  console.log('Window location:', window.location.href);
  
  // Check if stylesheets are loaded
  const stylesheets = document.styleSheets;
  console.log('Loaded stylesheets:', stylesheets.length);
  
  for (let i = 0; i < stylesheets.length; i++) {
    try {
      console.log(`Stylesheet ${i} href:`, stylesheets[i].href);
    } catch (e) {
      console.log(`Stylesheet ${i} error:`, e);
    }
  }

  // Check for specific CSS rules to confirm Tailwind is working
  const hasTailwind = Array.from(stylesheets).some(sheet => {
    try {
      return sheet.cssRules && Array.from(sheet.cssRules).some(rule => 
        rule.cssText && rule.cssText.includes('@tailwind')
      );
    } catch (e) {
      return false;
    }
  });
  
  console.log('Tailwind CSS detected:', hasTailwind);
};
