
// The main state interface exported and used in components
interface Pots {
  type: string;
  amount: string;
  prevAmount: string;
  currency: string;
  mustDropIn: string;
  imageType: string;
}
interface State {
  loading: boolean
  pots: Pots[]

}

export default State
