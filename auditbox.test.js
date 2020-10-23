const Auditbox = require('./index.js')

const box = new Auditbox({
  apiKey: process.env,
  baseURI: 'https://auditbox.ngrok.io/'
});

test('controls()', () => {
  return box.controls().then(controls => {
    expect(c.length).toBe(3);
  });
});

test('control(:id)', () => {
  const id = 1;
  return box.control(id).then(control => {
    expect(control.id).toBe(id);
  })
});

test('assets()', () => {
  return box.assets().then(assets => {
    expect(assets.length).toBe(8);
  });
})

test('asset(:id)', () => {
  const id = 1;
  return box.asset(id).then(asset => {
    expect(asset.id).toBe(id);
  });
})

test('identifyAsset(assetParams)', () => {
  const assetParams = {
    handle: 'arn:aws:rds:us-east-2:123456789012:db:redis-shared'
  };

  return box.identifyAsset(assetParams).then(asset => {
    expect(asset.handle).toBe(assetParams.handle);
  });
});

test('identifyEvidence(evidenceParams)', () => {
  const control = {
    id: 1
  };
  const asset = {
    id: 1
  }

  const evidenceParams = {
    control, asset, description: 'We have the meats'
  }
  const expectedArtifact = {
    control, asset
  }
  return box.identifyEvidence(evidenceParams).then(artifact => {
    expect(artifact.control).toEqual(control);
    expect(artifact.asset).toEqual(asset);
    expect(artifact.description).toEqual(evidenceParams.description);
  });
});
