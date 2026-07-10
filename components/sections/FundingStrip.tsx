interface FundingStripProps {
  awardTitle: string
  awardNumber: string
  amount: string
  years: string
}

export default function FundingStrip({ awardTitle, awardNumber, amount, years }: FundingStripProps) {
  return (
    <div className="funding">
      <div className="funding-inner">
        <span className="nsf-pill">NSF Funded</span>
        <p>
          <strong>{awardTitle}</strong> — Award #{awardNumber} &middot; {amount} &middot; {years}
        </p>
      </div>
    </div>
  )
}
