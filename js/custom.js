document.addEventListener('DOMContentLoaded', function () {
    // �������ֲ˵�����¼�
    const musicMenuItem = document.querySelector('a.menuitem.flat-box .fa-compact-disc');

    if (musicMenuItem) {
        // ��ȡ���� a ��ǩ�����ӵ���¼�
        const menuLink = musicMenuItem.closest('a');
        menuLink.addEventListener('click', function (e) {
            e.preventDefault(); // ��ֹĬ����ת

            // ��鲥���������Ƿ����
            let playerContainer = document.querySelector('.aplayer-container');
            if (!playerContainer) {
                // ������������ڣ�����һ��
                playerContainer = document.createElement('div');
                playerContainer.className = 'aplayer-container';
                document.body.appendChild(playerContainer);
            }

            // ��ʼ�� APlayer���滻Ϊ����������ã�
            const ap = new APlayer({
                container: playerContainer,
                fixed: true, // �̶��ڵײ���ʽ
                audio: [
                    {
                        name: '֪��',
                        artist: '�뾲��',
                        url: '�����ļ�URL', // �����Ǳ���·������������
                        cover: '����ͼƬURL'
                    }
                ]
            });

            ap.init(); // ��ʼ��������
            ap.play(); // �Զ����ţ���ѡ��
        });
    }
});