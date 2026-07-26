export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const formatSalary = (salary: string): string => {
  return salary.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getClassLabel = (classLevel: number | null): string => {
  const classLabels: { [key: number]: string } = {
    9: 'Class 9',
    10: 'Class 10',
    11: 'Class 11-12',
    12: 'Class 11-12',
    13: 'Graduation',
    14: 'Post Graduation',
  };
  return classLevel ? classLabels[classLevel] : '';
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
