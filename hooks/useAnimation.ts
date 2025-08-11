import { useEffect, useRef } from 'react';

/
 * Interface for animation options specific to the AI brand.
 */
interface AnimationOptions {
  duration?: number; // Duration of the animation in milliseconds
  delay?: number; // Delay before the animation starts
  easing?: string; // Easing function for the animation
}

/
 * Custom hook to handle animations for the AI brand website, VidNexus.
 * This hook leverages the web animations API to create smooth transitions
 * and effects that enhance the user experience in the technology domain.
 * 
 * @param {boolean} trigger - A boolean value to trigger the animation
 * @param {AnimationOptions} options - Options to customize the animation
 * @returns {React.RefObject<HTMLElement>} - A ref for the element to animate
 */
export const useAnimation = (trigger: boolean, options: AnimationOptions = {}) => {
  const { duration = 500, delay = 0, easing = 'ease-in-out' } = options;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (trigger && ref.current) {
      const animation = ref.current.animate(
        [
          { opacity: 0, transform: 'translateY(-20px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        {
          duration: duration,
          delay: delay,
          easing: easing,
          fill: 'forwards'
        }
      );

      return () => {
        animation.cancel();
      };
    }
  }, [trigger, duration, delay, easing]);

  return ref;
};