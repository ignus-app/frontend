interface UnderlineSVG {
  className?: string
}

export function Underline({ className }: UnderlineSVG) {
  return (
    <svg
      width="180"
      height="19"
      viewBox="0 0 180 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M38.9964 4.50006L69.5 3.48877C69.5 3.48877 97.5 1.50004 101.5 1.50003C105.5 1.50003 145 1.50003 145 1.50003L178.996 3.48879"
        stroke="#04D361"
      />
      <path d="M0.985946 9.50021L178.5 3.5" stroke="#04D361" />
      <path
        d="M3.01428 9.49962L94.5001 9.49962L116 9.49961C116 9.49961 120 9.49962 137.5 9.4996C155 9.49959 171.486 13.5 178.5 18.5"
        stroke="#04D361"
      />
    </svg>
  )
}
