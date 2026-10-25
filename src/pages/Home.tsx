import React, { useEffect, useRef, useState } from "react";
import Button from "../components/ButtonPage/button";
import Header from "../components/Header/header";
import InputBox from "../components/InputBox/InputBox";
import ResultTable from "../components/ResultTable/ResultTable";

type FieldName =
  | "initialValue"
  | "monthlyInvestment"
  | "interestRate"
  | "periodMonths";

type Row = {
  month: number;
  totalInvested: number;
  accumulatedInterest: number;
  totalAccumulated: number;
};

const MAX_MONTHS = 600;

//fields rendered in the form, in display order
const fields: {
  name: FieldName;
  label: string;
  icon: string;
  placeholder: string;
  required: boolean;
}[] = [
  {
    name: "initialValue",
    label: "Valor inicial",
    icon: "R$",
    placeholder: "Ex.: 1.000,00",
    required: true,
  },
  {
    name: "monthlyInvestment",
    label: "Investimento mensal",
    icon: "R$",
    placeholder: "Opcional. Ex.: 200,00",
    required: false,
  },
  {
    name: "interestRate",
    label: "Taxa de juros mensal",
    icon: "%",
    placeholder: "Ex.: 1,5",
    required: true,
  },
  {
    name: "periodMonths",
    label: "Período (meses)",
    icon: "#",
    placeholder: "Ex.: 12",
    required: true,
  },
];

//accepts both "1.000,50" (pt-BR) and "1000.50"
const parseNumber = (raw: string) => {
  const value = raw.trim();
  const normalized = value.includes(",")
    ? value.replace(/\./g, "").replace(",", ".")
    : value;
  return Number(normalized);
};

//function to calculate the interest month by month
const calculateInterest = (
  initialValue: number,
  interestRate: number,
  monthlyInvestment: number,
  periodMonths: number,
): Row[] => {
  const monthlyRate = interestRate / 100;
  let accumulated = initialValue;
  let totalInvested = initialValue;
  const calculatedData: Row[] = [];

  for (let month = 1; month <= periodMonths; month++) {
    accumulated = accumulated * (1 + monthlyRate) + monthlyInvestment;
    totalInvested += monthlyInvestment;
    calculatedData.push({
      month,
      totalInvested,
      accumulatedInterest: accumulated - totalInvested,
      totalAccumulated: accumulated,
    });
  }

  return calculatedData;
};

//returns an error message per invalid field
const validate = (values: Record<FieldName, string>) => {
  const errors: Partial<Record<FieldName, string>> = {};
  for (const { name, required } of fields) {
    const raw = values[name].trim();
    if (raw === "") {
      if (required) errors[name] = "Preencha este campo.";
      continue;
    }
    const value = parseNumber(raw);
    if (!Number.isFinite(value) || value < 0) {
      errors[name] = "Digite um número maior ou igual a 0.";
    } else if (
      name === "periodMonths" &&
      (!Number.isInteger(value) || value < 1 || value > MAX_MONTHS)
    ) {
      errors[name] = `Digite um número inteiro de 1 a ${MAX_MONTHS} meses.`;
    }
  }
  return errors;
};

function Home() {
  //state to store the values of the inputs
  const [values, setValues] = useState<Record<FieldName, string>>({
    initialValue: "",
    monthlyInvestment: "",
    interestRate: "",
    periodMonths: "",
  });
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  //state to store the data of the calculation
  const [data, setData] = useState<Row[]>([]);
  const resultRef = useRef<HTMLDivElement>(null);

  //bring the result into view after each calculation
  useEffect(() => {
    if (data.length === 0) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    resultRef.current?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  }, [data]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate(values);
    setErrors(newErrors);

    const firstInvalid = fields.find(({ name }) => newErrors[name]);
    if (firstInvalid) {
      document.getElementById(firstInvalid.name)?.focus();
      return;
    }

    setData(
      calculateInterest(
        parseNumber(values.initialValue),
        parseNumber(values.interestRate),
        values.monthlyInvestment.trim() === ""
          ? 0
          : parseNumber(values.monthlyInvestment),
        parseNumber(values.periodMonths),
      ),
    );
  };

  //update the value of the input and clear its error
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as FieldName;
    const value = e.target.value;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="containerHome">
      <Header />
      <main className="home-main">
        <form className="contentHome" onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            {fields.map(({ name, label, icon, placeholder, required }) => (
              <div className="field" key={name}>
                <label className="field-label" htmlFor={name}>
                  {label}
                </label>
                <InputBox
                  id={name}
                  name={name}
                  icon={icon}
                  placeholder={placeholder}
                  type="text"
                  inputMode={name === "periodMonths" ? "numeric" : "decimal"}
                  autoComplete="off"
                  required={required}
                  value={values[name]}
                  onChange={handleOnChange}
                  invalid={Boolean(errors[name])}
                  aria-describedby={errors[name] ? `${name}-error` : undefined}
                />
                {errors[name] && (
                  <span id={`${name}-error`} className="field-error">
                    {errors[name]}
                  </span>
                )}
              </div>
            ))}
          </div>
          <Button type="submit">Calcular</Button>
        </form>

        <p className="sr-only" aria-live="polite">
          {data.length > 0 &&
            `Resultado calculado para ${data.length} ${data.length === 1 ? "mês" : "meses"}.`}
        </p>

        {data.length > 0 && (
          <div ref={resultRef} className="result-anchor">
            <ResultTable data={data} />
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;
