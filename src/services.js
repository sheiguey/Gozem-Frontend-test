export function getTestimonial(url){
    return fetch(url)
}

export function getLanguages(){
    return fetch('https://test-admin-api.gozem.co/hiring/api/v1/languages')
}


export function pagination({ currentPage, pages, numBadges=6 }){
    const maxBadgesSide = numBadges-2;

    // Without separators case
    // ex: [1, 2, 3, 4, 5]
    if (pages <= numBadges) {
        return Array.from({ length: pages }).map((v, i) => i + 1)
    }

    const sideBadges = Array.from({ length: numBadges - 1 });
    
    // With a separator at the end case
    // ex: [1, 2, 3, 4, null, 49]
    if (currentPage <=maxBadgesSide) {
      return [...sideBadges.map((v, i) => i + 1), null];
    }

    // With a separator at the beginning case
    // ex: [1, null, 46, 47, 48, 49]
    if (currentPage > pages - maxBadgesSide) {
      return [1, null, ...sideBadges.map((v, i) => pages - i).reverse()];
    }
  
    // In the middle (separator left + right) case
    // ex: [1, null, 26, 27, 28, null, 49]
    sideBadges.pop();
    return [1,2,3,null,pages-2,pages-1,pages]
  }
  