
import { useState, useRef } from 'react'
import DescriptionModal from "../assets/components/DescriptionModal";

export default function Woodside() {
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
        title="Woodside Energy"
        subtitle="Microsoft Azure • Azure Logic Apps • Grafana • PromQL • KQL • PowerShell • ServiceNow"
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
            Digital Operation Technology Intern in Houston, TX (June &ndash; August 2026). The
            Operational Technology team had no centralized place to watch system health &mdash; metrics
            and logs lived apart from each other, and there was no easy way to compare what was
            happening right now against what had happened before. Spotting an anomaly meant digging
            through several systems by hand. I built the monitoring layer that fixed that, then
            automated the triage step on top of it.
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
                Designed and built 20+ Grafana dashboards covering 110+ virtual machines and 6 firewall
                clusters, giving 20+ engineers and leadership one place for real-time and historical
                views of metrics and logs.
            </li>
            <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Built a production Azure Logic Apps pipeline with a two-stage LLM workflow: when a
                Grafana alert fires, it runs a set of follow-up metric queries and auto-generates a
                ServiceNow ticket containing the alert text, a plain-language summary, probable causes,
                and suggested fixes &mdash; each backed by the query evidence it was drawn from.
            </li>
            <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Optimized queries and dashboard structure so 80+ million syslog records can be viewed
                and filtered in under a minute.
            </li>
            <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Wrote PowerShell scripts to automate deployment of dashboards and configurations through
                Azure DevOps CI/CD, so the monitoring stack ships the same way the rest of the platform does.
            </li>
            <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Sole developer on the dashboards and the alerting pipeline, working alongside three
                engineers for privileged access &mdash; one of whom was the primary stakeholder I built against.
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
                Gave the OT team a single centralized view of system health across the estate, replacing
                a manual hunt across disconnected systems.
            </li>
            <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Reduced time-to-detect and time-to-resolve: triage now starts from a ticket that already
                contains a summary, probable causes, and supporting evidence instead of a bare alert.
            </li>
            <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Made the log estate actually usable &mdash; 80+ million syslogs viewable and filterable
                in under a minute rather than being effectively off-limits.
            </li>
            <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                The primary stakeholder and the wider team recognized the work as delivering real
                business value to Woodside.
            </li>
            </ul>
        </div>

        {/* Key Takeaway */}
        <div>
            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-2">
                What I Learned
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-2">
                This was my first time building inside an enterprise cloud environment with real
                operational stakes. The things that stuck:
            </p>
            <ul className="space-y-1">
                <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Writing queries that stay fast at scale &mdash; the difference between a dashboard people
                use and one they abandon is almost always query design.
                </li>
                <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Designing LLM output engineers will actually trust: every claim in a generated ticket
                has to point back to the data that produced it.
                </li>
                <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Treating monitoring as a product with users, not a side artifact &mdash; sitting with the
                stakeholder and building to how they actually work.
                </li>
                <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Shipping infrastructure through CI/CD instead of clicking through a console.
                </li>
            </ul>
            </div>

        </div>

      </DescriptionModal>
    </div>
  );
}
