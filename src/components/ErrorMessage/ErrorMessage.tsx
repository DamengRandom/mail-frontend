export type tError = {
  className?: string,
  message: string,
}

export default function ErrorMessage({ className, message }: tError) {
  return (
    <p className={className}>{message}</p>
  )
};
