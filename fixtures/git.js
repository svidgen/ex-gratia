const GITLOG = `
commit 35053758cebff529e81bf95696801ec57db59903
Author: Jon Wire <iambipedal@gmail.com>
Date:   Thu Apr 8 22:37:09 2021 -0500

    explicitly specify --no-color, because paranoia

 1 file changed, 1 insertion(+), 1 deletion(-)

commit de7d5ed32c1044ae68a634e4dac24aab18a18865
Author: Bob Jones <bob@jones.net>
Date:   Thu Apr 8 22:18:06 2021 -0500

    fixed tests

 2 files changed, 10 insertions(+), 5 deletions(-)

commit 92a627cf30648735ddceb43832bf9cd65d3b04bf
Author: Jill Jackson <jill.jackson@yahoo.com>
Date:   Thu Apr 8 22:09:58 2021 -0500

    working with actual GH now; tests failing

 3 files changed, 32 insertions(+), 16 deletions(-)

commit 732aa7c33c849852b0f7589de21da2cf3e263043
Author: Jon Wire <iambipedal@gmail.com>
Date:   Thu Apr 8 21:20:13 2021 -0500

    getter and tests for GH ex-gratia-profile

 2 files changed, 79 insertions(+), 2 deletions(-)
`;

const EXPECTED_LOG = {
  "commits": [
    {
      "author": "iambipedal@gmail.com",
      "commit": "35053758cebff529e81bf95696801ec57db59903",
      "insertions": 1,
      "deletions": 1
    },
    {
      "author": "bob@jones.net",
      "commit": "de7d5ed32c1044ae68a634e4dac24aab18a18865",
      "insertions": 10,
      "deletions": 5
    },
    {
      "author": "jill.jackson@yahoo.com",
      "commit": "92a627cf30648735ddceb43832bf9cd65d3b04bf",
      "insertions": 32,
      "deletions": 16
    },
    {
      "author": "iambipedal@gmail.com",
      "commit": "732aa7c33c849852b0f7589de21da2cf3e263043",
      "insertions": 79,
      "deletions": 2
    }
  ],
  "insertions": 122,
  "deletions": 24
};

const EXPECTED_LOG_LIMIT_2 = {
  "commits": [
    {
      "author": "iambipedal@gmail.com",
      "commit": "35053758cebff529e81bf95696801ec57db59903",
      "insertions": 1,
      "deletions": 1
    },
    {
      "author": "bob@jones.net",
      "commit": "de7d5ed32c1044ae68a634e4dac24aab18a18865",
      "insertions": 10,
      "deletions": 5
    }
  ],
  "insertions": 11,
  "deletions": 6
};

module.exports = {
	GITLOG,
	EXPECTED_LOG,
	EXPECTED_LOG_LIMIT_2
};
