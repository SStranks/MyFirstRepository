export default {
  resolveSnapshotPath: (testPath, snapshotExtension) =>
    testPath
      .replace(/\.test\.([jt]sx?)/, `.test${snapshotExtension}`)
      .replace(/src/, '__snapshots__'),

  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath
      .replace(snapshotExtension, '.js')
      .replace('__snapshots__', 'src'),

  testPathForConsistencyCheck: 'src/components/some.test.js',
};
