// eslint-disable-next-line react/prop-types
export default function Form({ children, onSubmit, handleSubmit }) {
  return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>;
}
