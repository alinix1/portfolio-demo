import React from "react";
import gitImg from "../skills/git.svg";
import snowflakeImg from "../skills/snowflake.svg";
import bigqueryImg from "../skills/googlebigquery.svg";
import awsImg from "../skills/aws.png";
import postgresqlImg from "../skills/postgresql.svg";
import pythonImg from "../skills/python.svg";
import pandasImg from "../skills/pandas.svg";
import numpyImg from "../skills/numpy.svg";
import sqlImg from "../skills/sql.png";
import dbtImg from "../skills/dbt.svg";
import tableauImg from "../skills/tableau.png";
import matplotlibImg from "../skills/matplotlib.png";
import plotlyImg from "../skills/plotly.svg";
import excelImg from "../skills/excel.png";
import jupyterImg from "../skills/jupyter.svg";
import Image from "next/image";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full mt-20 md:mt-24 lg:mt-32 mb-20 max-w-[1240px] mx-auto px-2"
    >
      <div className="md:mb-12">
        <p className="text-xl tracking-widest uppercase text-[#070400] dark:text-slate-300">
          Skills
        </p>
        <h2 className="py-4 md:m-0">What I Can Do</h2>
      </div>

      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <div className="grid xs: grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://www.python.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Python"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={pythonImg}
                    width="64px"
                    height="64px"
                    alt="Logo for Python"
                    className="skill-icon"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>PYTHON</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://www.w3schools.com/sql/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Python"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={sqlImg}
                    width={30}
                    height={30}
                    alt="Logo for SQL"
                    className="skill-icon"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>SQL</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://pandas.pydata.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Pandas"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={pandasImg}
                    width="64px"
                    height="64px"
                    alt="Logo for Pandas"
                    className="skill-icon"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>PANDAS</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://numpy.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View NumPy"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={numpyImg}
                    width="64px"
                    height="64px"
                    alt="Logo for NumPy"
                    className="skill-icon"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>NUMPY</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://www.tableau.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Tableau"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={tableauImg}
                    width={30}
                    height={30}
                    alt="Logo for Tableau"
                    className="skill-icon"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>TABLEAU</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://www.postgresql.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View PostgreSQL"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={postgresqlImg}
                    width="64px"
                    height="64px"
                    alt="Logo for PostgreSQL"
                    className="skill-icon"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>POSTGRESQL</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://www.snowflake.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Snowflake"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={snowflakeImg}
                    width="64px"
                    height="64px"
                    alt="Logo for Snowflake"
                    className="skill-icon"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>SNOWFLAKE</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://cloud.google.com/bigquery"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View BigQuery"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={bigqueryImg}
                    width="64px"
                    height="64px"
                    alt="Logo for BigQuery"
                    className="skill-icon"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>BIGQUERY</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://www.getdbt.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View dbt"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={dbtImg}
                    width={30}
                    height={30}
                    alt="Logo for dbt"
                    className="skill-icon"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>DBT</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://aws.amazon.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View AWS"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={awsImg}
                    width={30}
                    height={30}
                    alt="Logo for AWS"
                    className="skill-icon"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>AWS</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://matplotlib.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Matplotlib"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={matplotlibImg}
                    width={30}
                    height={30}
                    alt="Logo for Matplotlib"
                    className="skill-icon"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>MATPLOTLIB</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://plotly.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Plotly"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={plotlyImg}
                    width="64px"
                    height="64px"
                    alt="Logo for Plotly"
                    className="skill-icon"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>PLOTLY</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://www.microsoft.com/en-us/microsoft-365/excel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Excel"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={excelImg}
                    width={30}
                    height={30}
                    alt="Logo for Excel"
                    className="skill-icon"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>EXCEL</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://jupyter.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Jupyter Notebook"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={jupyterImg}
                    width="64px"
                    height="64px"
                    alt="Logo for Jupyter Notebook"
                    className="skill-icon"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>JUPYTER NOTEBOOK</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 shadow-shadow-enhanced-light dark:shadow-shadow-light-white rounded-xl hover:scale-105 ease-in duration-300">
            <a
              href="https://git-scm.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Git"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={gitImg}
                    width="64px"
                    height="64px"
                    alt="Logo for Git"
                    className="skill-icon"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>GIT</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
