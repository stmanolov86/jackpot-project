
// The main state interface exported and used in components
export interface Pots {
  type: string;
  amount: string;
  prevAmount: string;
  currency: string;
  must_drop_in: string;
  imageType: string;
}
interface State {
  loading: boolean
  pots: Pots[]

}

export default State
