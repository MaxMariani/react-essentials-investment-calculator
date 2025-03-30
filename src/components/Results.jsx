import { calculateInvestmentResults, formatter } from "../util/investment";

function Results({ userInput }) {
  const annualData = calculateInvestmentResults(userInput);
  const initialInvestment = annualData[0].valueEndOfYear - annualData[0].interest - annualData[0].annualInvestment;

  return (
    <table id="result">
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
      <tbody>
        {annualData.map((yearData) => {

          const totalInterestValue = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterestValue;
          return <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>{formatter.format(totalInterestValue)}</td>
            <td>{formatter.format(totalAmountInvested)}</td>
          </tr>;
        })}
      </tbody>
    </table>
  );
}

export default Results;
