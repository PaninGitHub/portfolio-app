
import { useState, useRef } from 'react' 
import DescriptionModal from "../assets/components/DescriptionModal";

/**
 * Elegant, accessible modal for a professional portfolio
 * - Minimal aesthetic with subtle motion
 * - Keyboard & screen-reader accessible
 * - Focus-trap + return-focus
 * - Closes on ESC and backdrop click
 * - Prevents background scroll while open
 *
 * Tailwind required. Framer Motion + Lucide icons used for polish.
 */

export default function CSWholesales() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <div>
      <button
        ref={triggerRef}
        onClick={openModal}
        className="inline-flex items-center mt-[10px] mr-[5px] rounded-2xl border border-slate-200 bg-white/80 px-5 py-3 text-sm font-medium shadow-sm backdrop-blur-sm transition hover:shadow-md hover:bg-white dark:border-slate-700 dark:bg-slate-800/80 dark:hover:bg-slate-800"
      >
        See more
      </button>

      <DescriptionModal
        open={open}
        onClose={closeModal}
        title="C&S Wholesales - Currently Working"
        subtitle="React Native • Javascript • Express.js • Gluestack • PostgreSQL • Tanstack • TailwindCSS"
        actions={[
        ]}
        returnFocusRef={triggerRef}
      >
        <div className="space-y-6 text-slate-600 dark:text-slate-300 text-sm">
        {/* Overview */}
        <div>
            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Overview
            </h3>
            <p>
            Currently developing a vacation scheduling and management application for warehouse
            administrators and employees, replacing a legacy system with outdated
            technology and poor UI/UX. This new solution emphasizes modern, responsive
            design with seamless integration with other new applications within our portal.
            </p>
        </div>

        {/* My Role */}
        <div>
            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-2">
            My Role
            </h3>
            <ul className="space-y-1">
            <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Designing and implementing core systems across the stack using React
                Native, Express.js, PostgreSQL, TailwindCSS, and Tanstack.
            </li>
            <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Building 30+ RESTful APIs with validation, testing, and error handling to
                ensure reliability and maintainability.
            </li>
            <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Developing 12+ interactive, responsive screens to improve usability
                compared to the old system.
            </li>
            <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Working with mentors, team leads, and my intern partner, taking
                ownership of most feature development while collaborating on
                architecture and deployment decisions through bi-weekly standups.
            </li>
            </ul>
        </div>

        {/* Impact */}
        <div>
            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Impact
            </h3>
            <ul className="space-y-1">
            <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Improved UI/UX significantly compared to the legacy app, making it
                easier for administrators and staff to schedule and manage vacations.
            </li>
            <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Delivered an in-depth demo to IT leadership, earning recognition for
                clarity and functionality, and strengthening visibility for our team and
                director.
            </li>
            <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Helped establish better coding practices (unit testing, structured error
                handling, documentation) for future maintainability.
            </li>
            <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Ongoing development includes refining features and preparing for wider
                demos.
            </li>
            </ul>
        </div>

        {/* Key Takeaway */}
        <div>
            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-2">
                What I Learned
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-2">
                Throughout my time I not only dove deep into full-stack development, but also
                learned how to think as a developer and as a teammate. Over the months I
                improved on:
            </p>
            <ul className="space-y-1">
                <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Breaking down big problems into smaller, manageable subproblems.
                </li>
                <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Balancing writing clean, efficient code with delivering features on time.
                </li>
                <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Communicating effectively with both technical and non-technical team members.
                </li>
                <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Understanding how design choices and error handling directly impact the user
                experience.
                </li>
            </ul>
            </div>

        </div>

      </DescriptionModal>
    </div>
  );
}
