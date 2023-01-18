export interface Todo {
  task: string
  description: string
  id: string
}

export type HandleFunction = (
  e:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>
) => void

export interface Props {
  children: JSX.Element | JSX.Element[]
}

export interface Prop {
  localSt: Todo[]
}

export interface TasksContext {
  data: Todo[]
  setData: any
}
