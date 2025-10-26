// This file defines common schema & reusable helpers across all SQLX files

// Reference to the source dataset and table
const sourceDataset = dataform.projectConfig.vars.source_dataset;
const transactionsTable = dataform.projectConfig.vars.transactions_table;

// Export variables for use in SQLX definitions
module.exports = {
  sourceDataset,
  transactionsTable
};
