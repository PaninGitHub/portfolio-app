
import { useState, useRef } from 'react'
import DescriptionModal from "../assets/components/DescriptionModal";

export default function AtmosphericSciences() {
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
        title="Texas A&M Atmospheric Sciences"
        subtitle="Python • Pandas • GDAL • ArcGIS Geodatabases • Excel"
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
            Data Science Research Assistant (February &ndash; April 2025) on a Houston air-quality study.
            The lab had measured the chemical composition of airborne particulates at a limited set of
            monitoring sites, but not across the wider region. Because composition tracks with
            meteorology and land use &mdash; wind, temperature, humidity, and whether the ground upwind is
            industrial or residential &mdash; the plan was to model composition where no sensor exists.
            That needed a gridded dataset of those predictors covering all of Houston at 1 km resolution,
            and building it was my job.
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
                Built a parallelized Python ETL pipeline that pulls 10 years of daily weather observations
                &mdash; temperature, dew point, humidity, pressure, wind speed and direction &mdash; across
                30+ Houston-area stations, cutting collection from hours to 1&ndash;2 minutes.
            </li>
            <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Used GDAL-based rasterization to convert a geodatabase of Houston&ndash;Galveston land-use
                and land-cover polygons into 1 km grid features, so industrial, residential, and commercial
                land use could be joined to the weather data on a shared grid.
            </li>
            <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Produced clean, analysis-ready CSV datasets to support research analysis and downstream
                machine-learning model training.
            </li>
            <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Reviewed the literature on source apportionment and machine learning for atmospheric
                chemistry &mdash; sparse multinomial logistic regression and boosted regression for aerosol
                mass spectrometry, random-forest weather normalization, positive matrix factorization,
                SHAP &mdash; and summarized candidate approaches and datasets (NASA&apos;s MERRA-2 reanalysis,
                the Prithvi WxC weather foundation model) for the modeling stage.
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
                Delivered the combined 1 km Houston dataset that the modeling work depends on &mdash;
                weather and land use aligned on one grid.
            </li>
            <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Turned data collection from a manual, multi-hour task into a repeatable pipeline the lab
                can re-run as new observations land.
            </li>
            <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Gave the team a written survey of viable modeling approaches, so the choice of method was
                grounded in what has actually worked in published air-quality research.
            </li>
            </ul>
        </div>

        {/* Key Takeaway */}
        <div>
            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-2">
                What I Learned
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-2">
                My first research role, and the first time the hard part of a problem was the data rather
                than the code:
            </p>
            <ul className="space-y-1">
                <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Geospatial data is mostly a resolution problem &mdash; forecast grids, reanalysis products,
                and a 1 km target grid all disagree, and reconciling them is the actual work.
                </li>
                <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Reading domain research papers closely enough to translate them into a concrete data plan.
                </li>
                <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Parallelizing I/O-bound collection is often the single biggest speedup available, and it
                changes what a team is willing to try.
                </li>
                <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1" />
                Asking the researcher directly what the model is for, rather than guessing from the data.
                </li>
            </ul>
            </div>

        </div>

      </DescriptionModal>
    </div>
  );
}
