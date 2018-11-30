import { GetEntries } from './GetEntries';
const mapStateToProps = state => ({
  entry: state.entry
});
const mapDispatchToProps = {
  getEntries
};
export default connect(mapStateToProps, mapDispatchToProps)(GetEntries);